(function () {
  "use strict";

  // Configuração — URL do relay de leads (backend/leads-relay.gs, publicado como
  // Google Apps Script Web App). Ver README.md secção "Activar a captura de leads".
  // Este relay regista sempre o número numa Google Sheet e reencaminha para o CRM
  // do Nelson assim que o URL dele for configurado do lado do relay (sem alterar
  // este ficheiro nem o site publicado). Deixar vazio desactiva apenas o envio,
  // sem afectar o funcionamento do gate.
  const CONFIG = {
    leadsWebhookUrl: ""
  };

  const STORAGE_KEY_UNLOCKED = "lf_unlocked";
  const STORAGE_KEY_PHONE = "lf_phone";
  const SESSION_KEY_SKIPPED = "lf_skipped_session";

  const gateEl = document.getElementById("gate");
  const gateForm = document.getElementById("gateForm");
  const phoneInput = document.getElementById("phoneInput");
  const gateError = document.getElementById("gateError");
  const skipBtn = document.getElementById("skipBtn");

  function isValidAngolanMobile(raw) {
    const digits = raw.replace(/\D/g, "");
    // Aceita 9XXXXXXXX (9 dígitos) ou 2449XXXXXXXX (com indicativo)
    const local = digits.startsWith("244") ? digits.slice(3) : digits;
    return /^9\d{8}$/.test(local);
  }

  function unlock(phone) {
    try {
      localStorage.setItem(STORAGE_KEY_UNLOCKED, "true");
      if (phone) localStorage.setItem(STORAGE_KEY_PHONE, phone);
    } catch (e) { /* localStorage indisponível — segue sem persistência */ }
    document.documentElement.classList.add("unlocked");
    if (gateEl) gateEl.style.display = "none";
  }

  function skipForSession() {
    try { sessionStorage.setItem(SESSION_KEY_SKIPPED, "true"); } catch (e) {}
    document.documentElement.classList.add("unlocked");
    if (gateEl) gateEl.style.display = "none";
  }

  function sendLead(phone) {
    if (!CONFIG.leadsWebhookUrl) return;
    try {
      fetch(CONFIG.leadsWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          phone: phone,
          restaurant: "La Femme Sabores",
          source: "menu-digital",
          timestamp: new Date().toISOString()
        })
      }).catch(function () { /* falha silenciosa — não bloqueia o acesso ao menu */ });
    } catch (e) { /* ambiente sem fetch — ignorar */ }
  }

  if (gateForm) {
    gateForm.addEventListener("submit", function (ev) {
      ev.preventDefault();
      const value = phoneInput.value.trim();
      if (!isValidAngolanMobile(value)) {
        gateError.textContent = "Introduza um número angolano válido (ex: 923 456 789).";
        phoneInput.focus();
        return;
      }
      gateError.textContent = "";
      const normalized = "+244" + value.replace(/\D/g, "").slice(-9);
      sendLead(normalized);
      unlock(normalized);
    });
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", function () {
      skipForSession();
    });
  }

  // ---------- Render do menu ----------
  function renderMenu() {
    const nav = document.getElementById("catNav");
    const main = document.getElementById("menuMain");
    if (!nav || !main || typeof MENU_DATA === "undefined") return;

    const navFrag = document.createDocumentFragment();
    const mainFrag = document.createDocumentFragment();

    MENU_DATA.forEach(function (cat, idx) {
      const pill = document.createElement("button");
      pill.className = "cat-pill" + (idx === 0 ? " active" : "");
      pill.type = "button";
      pill.dataset.target = cat.id;
      pill.innerHTML = '<span aria-hidden="true">' + cat.icon + "</span> " + cat.label;
      pill.addEventListener("click", function () {
        const target = document.getElementById("cat-" + cat.id);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      navFrag.appendChild(pill);

      const section = document.createElement("section");
      section.className = "category-section";
      section.id = "cat-" + cat.id;

      const title = document.createElement("h2");
      title.className = "category-title";
      title.innerHTML = '<span aria-hidden="true">' + cat.icon + "</span> " + cat.label;
      section.appendChild(title);

      const list = document.createElement("div");
      list.className = "item-list";

      cat.items.forEach(function (item) {
        const card = document.createElement("article");
        card.className = "item-card";
        card.dataset.searchable = (item.name + " " + (item.desc || "")).toLowerCase();

        const top = document.createElement("div");
        top.className = "item-top";
        const name = document.createElement("span");
        name.className = "item-name";
        name.textContent = item.name;
        const price = document.createElement("span");
        price.className = "item-price";
        price.textContent = item.price;
        top.appendChild(name);
        top.appendChild(price);
        card.appendChild(top);

        if (item.desc) {
          const desc = document.createElement("p");
          desc.className = "item-desc";
          desc.textContent = item.desc;
          card.appendChild(desc);
        }

        if (item.signature) {
          const badge = document.createElement("span");
          badge.className = "badge-signature";
          badge.textContent = "Prato Assinatura";
          card.appendChild(badge);
        }

        list.appendChild(card);
      });

      section.appendChild(list);
      mainFrag.appendChild(section);
    });

    nav.appendChild(navFrag);
    main.appendChild(mainFrag);

    setupActiveNavTracking();
    setupSearch();
  }

  function setupActiveNavTracking() {
    const sections = Array.prototype.slice.call(document.querySelectorAll(".category-section"));
    const pills = Array.prototype.slice.call(document.querySelectorAll(".cat-pill"));
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const id = entry.target.id.replace("cat-", "");
        pills.forEach(function (p) {
          p.classList.toggle("active", p.dataset.target === id);
        });
        const activePill = pills.filter(function (p) { return p.dataset.target === id; })[0];
        if (activePill) activePill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      });
    }, { rootMargin: "-160px 0px -70% 0px", threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }

  function setupSearch() {
    const input = document.getElementById("searchInput");
    const noResults = document.getElementById("noResults");
    if (!input) return;

    input.addEventListener("input", function () {
      const q = input.value.trim().toLowerCase();
      const cards = document.querySelectorAll(".item-card");
      const sections = document.querySelectorAll(".category-section");
      let anyVisible = false;

      cards.forEach(function (card) {
        const match = !q || card.dataset.searchable.indexOf(q) !== -1;
        card.style.display = match ? "" : "none";
        if (match) anyVisible = true;
      });

      sections.forEach(function (section) {
        const visibleCards = section.querySelectorAll('.item-card:not([style*="display: none"])');
        section.style.display = visibleCards.length ? "" : "none";
      });

      if (noResults) noResults.style.display = anyVisible ? "none" : "block";
    });
  }

  // ---------- Ajuste dinâmico da altura do cabeçalho (nav fixo nunca sobrepõe o header) ----------
  function updateHeaderOffset() {
    const header = document.querySelector("header.site-header");
    const nav = document.querySelector("nav.cat-nav");
    if (!header) return;
    const headerH = header.getBoundingClientRect().height;
    const navH = nav ? nav.getBoundingClientRect().height : 0;
    document.documentElement.style.setProperty("--header-h", headerH + "px");
    document.documentElement.style.setProperty("--sections-offset", (headerH + navH + 20) + "px");
  }

  window.addEventListener("resize", updateHeaderOffset);
  window.addEventListener("load", updateHeaderOffset);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(updateHeaderOffset);
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderMenu();
    updateHeaderOffset();
  });
})();
