(function () {
  "use strict";

  const CONFIG = {
    leadsWebhookUrl: "https://script.google.com/macros/s/AKfycbyUzx_a2OSjDBhmeVZxjyL9MtpP9cTbWX7nwGB2cmEw_8sdQ_9LonrZnguIcvZ9STkr/exec"
  };
  const STORAGE_KEY_UNLOCKED = "lf_unlocked";
  const STORAGE_KEY_PHONE = "lf_phone";
  const SESSION_KEY_SKIPPED = "lf_skipped_session";

  const state = { universeId: "comida", observer: null };
  const universeCopy = {
    comida: { kicker: "Da nossa cozinha", title: "Comida", text: "Receitas generosas, grelhados, sabores do mar e pratos que celebram a mesa angolana." },
    bebidas: { kicker: "Para acompanhar", title: "Bebidas", text: "Dos sumos naturais aos cocktails e vinhos, encontre o acompanhamento certo para o seu momento." },
    "pequeno-almoco": { kicker: "Começar bem", title: "Pequeno-Almoço", text: "Sabores leves e reconfortantes para começar o dia no La Femme." }
  };

  function normalizeText(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function setupGate() {
    const gate = document.getElementById("gate");
    const form = document.getElementById("gateForm");
    const phoneInput = document.getElementById("phoneInput");
    const error = document.getElementById("gateError");
    const skip = document.getElementById("skipBtn");

    function isValid(raw) {
      const digits = raw.replace(/\D/g, "");
      const local = digits.indexOf("244") === 0 ? digits.slice(3) : digits;
      return /^9\d{8}$/.test(local);
    }
    function hideGate() {
      document.documentElement.classList.add("unlocked");
      if (gate) gate.style.display = "none";
    }
    function sendLead(phone) {
      if (!CONFIG.leadsWebhookUrl) return;
      try {
        fetch(CONFIG.leadsWebhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ phone: phone, restaurant: "La Femme Sabores", source: "menu-digital-signature", timestamp: new Date().toISOString() })
        }).catch(function () {});
      } catch (e) {}
    }

    if (form) form.addEventListener("submit", function (event) {
      event.preventDefault();
      const value = phoneInput.value.trim();
      if (!isValid(value)) {
        error.textContent = "Introduza um número angolano válido (ex.: 923 456 789).";
        phoneInput.focus();
        return;
      }
      error.textContent = "";
      const phone = "+244" + value.replace(/\D/g, "").slice(-9);
      try {
        localStorage.setItem(STORAGE_KEY_UNLOCKED, "true");
        localStorage.setItem(STORAGE_KEY_PHONE, phone);
      } catch (e) {}
      sendLead(phone);
      hideGate();
    });

    if (skip) skip.addEventListener("click", function () {
      try { sessionStorage.setItem(SESSION_KEY_SKIPPED, "true"); } catch (e) {}
      hideGate();
    });
  }

  function getUniverse(id) {
    return SIGNATURE_CONFIG.universes.filter(function (item) { return item.id === id; })[0];
  }

  function getCategory(id) {
    return MENU_DATA.filter(function (item) { return item.id === id; })[0];
  }

  function createItemCard(item, categoryLabel) {
    const card = document.createElement("article");
    card.className = "item-card";
    card.dataset.searchable = normalizeText(item.name + " " + (item.desc || "") + " " + categoryLabel);

    if (categoryLabel && document.body.classList.contains("searching")) {
      const meta = document.createElement("p");
      meta.className = "search-result-meta";
      meta.textContent = categoryLabel;
      card.appendChild(meta);
    }

    const top = document.createElement("div");
    top.className = "item-top";
    const name = document.createElement("span");
    name.className = "item-name";
    name.textContent = item.name;
    top.appendChild(name);

    if (!item.sizes) {
      const price = document.createElement("span");
      price.className = "item-price";
      price.textContent = item.price;
      top.appendChild(price);
    }
    card.appendChild(top);

    if (item.desc) {
      const desc = document.createElement("p");
      desc.className = "item-desc";
      desc.textContent = item.desc;
      card.appendChild(desc);
    }

    if (item.sizes) {
      const sizes = document.createElement("div");
      sizes.className = "item-sizes";
      item.sizes.forEach(function (size) {
        const chip = document.createElement("span");
        chip.className = "item-size";
        const label = document.createElement("b");
        label.textContent = size.label;
        chip.appendChild(label);
        chip.appendChild(document.createTextNode(" · " + size.price));
        sizes.appendChild(chip);
      });
      card.appendChild(sizes);
    }

    if (item.signature) {
      const badge = document.createElement("span");
      badge.className = "badge-signature";
      badge.textContent = "Assinatura da casa";
      card.appendChild(badge);
    }
    return card;
  }

  function createFeature(category, feature) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-feature";
    button.setAttribute("aria-label", "Ampliar destaque de " + category.label);

    const image = document.createElement("img");
    image.src = feature.image;
    image.alt = feature.caption + " — " + category.label;
    image.width = 1400;
    image.height = 1050;
    image.loading = "lazy";
    image.decoding = "async";
    button.appendChild(image);

    const shade = document.createElement("span");
    shade.className = "feature-shade";
    button.appendChild(shade);

    const copy = document.createElement("span");
    copy.className = "feature-copy";
    const eyebrow = document.createElement("span");
    eyebrow.className = "feature-eyebrow";
    eyebrow.textContent = feature.eyebrow;
    const caption = document.createElement("strong");
    caption.textContent = feature.caption;
    copy.appendChild(eyebrow);
    copy.appendChild(caption);
    button.appendChild(copy);

    const zoom = document.createElement("span");
    zoom.className = "feature-zoom";
    zoom.setAttribute("aria-hidden", "true");
    zoom.textContent = "+";
    button.appendChild(zoom);

    button.addEventListener("click", function () { openLightbox(feature.image, feature.caption); });
    return button;
  }

  function createIntro(copy, countText) {
    const intro = document.createElement("header");
    intro.className = "universe-intro";
    const kicker = document.createElement("p");
    kicker.className = "results-kicker";
    kicker.textContent = copy.kicker;
    const title = document.createElement("h2");
    title.textContent = copy.title;
    const text = document.createElement("p");
    text.textContent = countText || copy.text;
    intro.appendChild(kicker);
    intro.appendChild(title);
    intro.appendChild(text);
    return intro;
  }

  function renderUniverse(universeId) {
    state.universeId = universeId;
    document.body.classList.remove("searching");
    const universe = getUniverse(universeId);
    const main = document.getElementById("menuMain");
    const nav = document.getElementById("catNav");
    const noResults = document.getElementById("noResults");
    main.textContent = "";
    nav.textContent = "";
    nav.hidden = false;
    noResults.style.display = "none";
    main.appendChild(createIntro(universeCopy[universeId]));

    universe.categories.forEach(function (categoryId, index) {
      const category = getCategory(categoryId);
      if (!category) return;

      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "cat-pill" + (index === 0 ? " active" : "");
      pill.dataset.target = category.id;
      pill.textContent = category.label;
      pill.addEventListener("click", function () {
        const target = document.getElementById("cat-" + category.id);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      nav.appendChild(pill);

      const section = document.createElement("section");
      section.className = "category-section";
      section.id = "cat-" + category.id;

      const heading = document.createElement("div");
      heading.className = "category-heading";
      const title = document.createElement("h2");
      title.textContent = category.label;
      const count = document.createElement("span");
      count.className = "item-count";
      count.textContent = category.items.length + (category.items.length === 1 ? " opção" : " opções");
      heading.appendChild(title);
      heading.appendChild(count);
      section.appendChild(heading);

      const feature = SIGNATURE_CONFIG.highlights[category.id];
      if (feature) section.appendChild(createFeature(category, feature));

      const list = document.createElement("div");
      list.className = "item-list";
      category.items.forEach(function (item) { list.appendChild(createItemCard(item, category.label)); });
      section.appendChild(list);
      main.appendChild(section);
    });

    updateActiveTabs();
    setupSectionObserver();
    requestAnimationFrame(updateOffsets);
  }

  function renderSearch(query) {
    const normalized = normalizeText(query.trim());
    if (!normalized) {
      renderUniverse(state.universeId);
      return;
    }

    document.body.classList.add("searching");
    const main = document.getElementById("menuMain");
    const nav = document.getElementById("catNav");
    const noResults = document.getElementById("noResults");
    const matches = [];

    MENU_DATA.forEach(function (category) {
      category.items.forEach(function (item) {
        const searchable = normalizeText(item.name + " " + (item.desc || "") + " " + category.label);
        if (searchable.indexOf(normalized) !== -1) matches.push({ item: item, category: category });
      });
    });

    if (state.observer) state.observer.disconnect();
    nav.hidden = true;
    main.textContent = "";
    main.appendChild(createIntro(
      { kicker: "Pesquisa no menu", title: "Resultados", text: "" },
      matches.length + (matches.length === 1 ? " resultado encontrado" : " resultados encontrados")
    ));

    if (matches.length) {
      const list = document.createElement("div");
      list.className = "item-list";
      matches.forEach(function (match) { list.appendChild(createItemCard(match.item, match.category.label)); });
      main.appendChild(list);
      noResults.style.display = "none";
    } else {
      noResults.style.display = "block";
    }
    requestAnimationFrame(updateOffsets);
  }

  function setupMainNavigation() {
    const nav = document.getElementById("experienceNav");
    SIGNATURE_CONFIG.universes.forEach(function (universe) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "experience-tab";
      button.dataset.universe = universe.id;
      button.textContent = universe.label;
      button.addEventListener("click", function () {
        const input = document.getElementById("searchInput");
        input.value = "";
        document.getElementById("clearSearch").classList.remove("visible");
        renderUniverse(universe.id);
        window.scrollTo({ top: document.querySelector(".hero").offsetTop, behavior: "smooth" });
      });
      nav.appendChild(button);
    });
  }

  function updateActiveTabs() {
    document.querySelectorAll(".experience-tab").forEach(function (tab) {
      tab.classList.toggle("active", tab.dataset.universe === state.universeId);
    });
  }

  function setupSectionObserver() {
    if (state.observer) state.observer.disconnect();
    if (!("IntersectionObserver" in window)) return;
    const pills = Array.prototype.slice.call(document.querySelectorAll(".cat-pill"));
    state.observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const id = entry.target.id.replace("cat-", "");
        pills.forEach(function (pill) { pill.classList.toggle("active", pill.dataset.target === id); });
        const active = pills.filter(function (pill) { return pill.dataset.target === id; })[0];
        if (active) active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      });
    }, { rootMargin: "-250px 0px -62% 0px", threshold: 0 });
    document.querySelectorAll(".category-section").forEach(function (section) { state.observer.observe(section); });
  }

  function setupSearch() {
    const input = document.getElementById("searchInput");
    const clear = document.getElementById("clearSearch");
    let timer;
    input.addEventListener("input", function () {
      clear.classList.toggle("visible", !!input.value);
      window.clearTimeout(timer);
      timer = window.setTimeout(function () { renderSearch(input.value); }, 100);
    });
    clear.addEventListener("click", function () {
      input.value = "";
      clear.classList.remove("visible");
      renderUniverse(state.universeId);
      input.focus();
    });
  }

  function openLightbox(src, caption) {
    const dialog = document.getElementById("imageLightbox");
    const image = document.getElementById("lightboxImage");
    image.src = src;
    image.alt = caption;
    document.getElementById("lightboxCaption").textContent = caption;
    if (typeof dialog.showModal === "function") dialog.showModal();
  }

  function setupLightbox() {
    const dialog = document.getElementById("imageLightbox");
    document.getElementById("closeLightbox").addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
  }

  function updateOffsets() {
    const header = document.querySelector(".site-header");
    const experience = document.querySelector(".experience-nav");
    const cat = document.querySelector(".cat-nav");
    const headerH = header ? header.getBoundingClientRect().height : 0;
    const experienceH = experience ? experience.getBoundingClientRect().height : 0;
    const catH = cat && !cat.hidden ? cat.getBoundingClientRect().height : 0;
    document.documentElement.style.setProperty("--header-h", headerH + "px");
    document.documentElement.style.setProperty("--experience-h", experienceH + "px");
    document.documentElement.style.setProperty("--cat-h", catH + "px");
    document.documentElement.style.setProperty("--section-offset", (headerH + experienceH + catH + 18) + "px");
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (typeof MENU_DATA === "undefined" || typeof SIGNATURE_CONFIG === "undefined") return;
    setupGate();
    setupMainNavigation();
    setupSearch();
    setupLightbox();
    renderUniverse(state.universeId);
    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(updateOffsets);
  });
})();
