---
title: "Documentação Completa — Menu Digital La Femme"
cliente: "La Femme Sabores"
projecto: "La Femme - SIC Pro"
versao: "1.0"
data: "17 de Julho de 2026"
estado: "Activo"
---

# Documentação Completa — Menu Digital La Femme

## 1. Objectivo e estado actual

O **Menu Digital La Femme** é uma página web mobile-first para consulta do menu da **La Femme Sabores**. O objectivo é disponibilizar o catálogo gastronómico por QR code ou link directo, facilitar a pesquisa de itens e, quando o visitante fornece voluntariamente o seu número, criar uma base de leads para a operação comercial.

- **Produção actual:** [menu-la-femme.surge.sh](https://menu-la-femme.surge.sh/)
- **Repositório:** [Marca-Digital-AI/menu-la-femme](https://github.com/Marca-Digital-AI/menu-la-femme)
- **Tecnologia:** HTML, CSS e JavaScript estáticos, sem etapa de build e sem dependências de aplicação.
- **Responsável do projecto no Fibery:** Nelson Rodrigues.

A versão actual está publicada no Surge e o código está sincronizado na `main` do GitHub.

## 2. Estrutura técnica existente

O projecto é uma página única, organizada assim:

| Componente | Função |
|---|---|
| `index.html` | Estrutura da página: gate de acesso, navegação, catálogo e rodapé. |
| `assets/css/style.css` | Design system, responsividade, cartões de itens, etiquetas de tamanhos e destaques. |
| `assets/js/menu-data.js` | Fonte de verdade do catálogo: categorias, descrições, tamanhos e preços. |
| `assets/js/app.js` | Gate de telefone, validação, persistência local, pesquisa, renderização e envio de leads. |
| `assets/img/` | Logótipo, imagem de ambiente e QR code. |
| `backend/leads-relay.gs` | Google Apps Script que recebe os contactos, regista-os na Sheet e pode encaminhá-los para o SIC/CRM. |
| `Menu Digital - Documentacao e QR Code/` | QR code e documentação técnica complementar. |

A página usa apenas Google Fonts para as famílias Playfair Display e Inter. Não há base de dados do catálogo no servidor: os itens são mantidos de forma versionada em `menu-data.js`.

## 3. Funcionamento para o visitante

### 3.1 Acesso ao menu

Ao entrar no link ou ler o QR code, o visitante encontra um gate que pede um número de telefone angolano. O fluxo é o seguinte:

1. O número é validado apenas por formato: `9XXXXXXXX`, com suporte para o indicativo `+244`.
2. Quando válido, o menu é desbloqueado.
3. O estado de desbloqueio e o número são mantidos em `localStorage`; no mesmo dispositivo, o gate não volta a aparecer.
4. Existe a opção discreta **"Continuar sem indicar número"**. Nesta modalidade o menu é desbloqueado apenas na sessão actual através de `sessionStorage`.
5. Não há SMS, OTP ou autenticação de identidade. O gate recolhe contacto, não valida a titularidade do número.

### 3.2 Consulta do catálogo

Depois de desbloqueado, o visitante pode navegar pelas categorias, pesquisar produtos e consultar descrições e preços. Os itens marcados como assinatura aparecem destacados. Para produtos com vários tamanhos, cada tamanho e preço é mostrado como etiqueta própria, evitando ambiguidade no valor.

## 4. Catálogo e actualizações de conteúdo

A implementação inicial já disponibilizava refeições, sandes, carnes, peixe, bebidas e bebidas alcoólicas. A actualização de 15 de Julho de 2026 integrou a informação recebida nos ficheiros de menu mais recentes e estruturou-a no catálogo digital.

### 4.1 Novas fontes integradas

| Fonte | Conteúdo integrado |
|---|---|
| `Menu la femme atualizado PIZZA.pdf` | Pizzas, tamanhos Familiar/Média/Individual, extras e massas. |
| `Menu Pequeno Almoço.pdf` | Pequeno-almoço, sopas e frios, pratos quentes, bebidas de pequeno-almoço. |
| `NOVO MENU DE BEBIDAS.pdf` | Águas e refrigerantes, café e chá, sumos naturais, energéticos, cocktails, cervejas, destilados, vinhos e espumantes. |

### 4.2 Categorias actuais

O menu contém, entre outras, as seguintes categorias:

- Sopas, entradas e sandes;
- Pizzas, extras e massas;
- Carnes e peixe;
- Pequeno-almoço, dividido em sopas e frios e em pratos quentes;
- Águas e refrigerantes;
- Café e chá;
- Sumos naturais e energéticos;
- Cocktails e sangrias;
- Cervejas;
- Destilados;
- Vinhos;
- Champanhe e espumantes.

### 4.3 Modelo de dados do catálogo

Um item simples usa `name`, `desc` e `price`. Um item com vários tamanhos usa `sizes`, uma lista de pares `label` e `price`. Exemplo:

```js
{
  name: "Pizza La Femme",
  desc: "Fiambre, frango, bacon, ovo, tomate, cebola e queijo",
  sizes: [
    { label: "Familiar", price: "16.500 Kz" },
    { label: "Média", price: "11.200 Kz" },
    { label: "Individual", price: "8.000 Kz" }
  ],
  signature: true
}
```

Para actualizar o catálogo, editar exclusivamente `assets/js/menu-data.js`, validar a escrita e publicar uma nova versão do site. Não alterar directamente o HTML para adicionar produtos.

## 5. Captura de leads e Google Sheet

### 5.1 Estado implementado

A captura de leads está activa. Quando um visitante submete um número válido, o site envia um JSON para o relay publicado no Google Apps Script:

```text
https://script.google.com/macros/s/AKfycbyUzx_a2OSjDBhmeVZxjyL9MtpP9cTbWX7nwGB2cmEw_8sdQ_9LonrZnguIcvZ9STkr/exec
```

O envio é assíncrono e não bloqueia o acesso ao menu. O navegador usa `mode: "no-cors"` e `Content-Type: "text/plain"`, compatível com a recepção do Apps Script.

### 5.2 Base de dados de leads

A base chama-se **La Femme — Leads Menu Digital** e foi movida para a pasta local sincronizada do projecto:

```text
Marca Digital/01 Projectos/CLI - La Femme - SIC Pro/03 Implementação/menu-la-femme/
```

O atalho local `.gsheet` aponta para a Google Sheet na conta `marcadigital17@gmail.com`.

Cada contacto registado contém:

| Coluna | Conteúdo |
|---|---|
| Data/Hora | Momento de submissão, definido pelo Apps Script. |
| Telefone | Número normalizado com o indicativo `+244`. |
| Restaurante | `La Femme Sabores`. |
| Origem | `menu-digital`. |
| Reencaminhado ao CRM | Indica se o endpoint do SIC/CRM já foi configurado. |

O relay foi testado após a publicação e respondeu `{"ok":true}`. Os registos técnicos de validação usam a origem `integration-test` e o número de teste `+244999999999`; podem ser removidos manualmente da Sheet para limpar a base antes de análise operacional.

### 5.3 Encaminhamento futuro para o SIC/CRM

O relay está preparado para encaminhar cada lead sem expor credenciais no site. Quando o endpoint do SIC existir, configurar nas **Propriedades do script**:

- `CRM_WEBHOOK_URL`: endpoint HTTPS do SIC/CRM;
- `CRM_WEBHOOK_AUTH_HEADER`: opcional, nome do cabeçalho de autenticação, por exemplo `Authorization` ou `X-API-Key`;
- `CRM_WEBHOOK_AUTH_VALUE`: opcional, valor do cabeçalho, por exemplo `Bearer <chave>`.

O payload enviado ao CRM terá telefone, restaurante, origem e timestamp. Mesmo que o CRM falhe, o relay tenta primeiro registar o contacto na Google Sheet, preservando a cópia de segurança.

## 6. Publicação e controlo de versões

### 6.1 Publicação actual

A produção activa é gerida no Surge:

```bash
surge --project . --domain menu-la-femme.surge.sh
```

A publicação de 17 de Julho de 2026 colocou em produção o catálogo actualizado e a configuração do relay de leads.

### 6.2 GitHub

O repositório mantém a cópia versionada da aplicação. O commit actual é:

```text
2cece06 feat: actualiza menu e activa captura de leads
```

Para alterações futuras:

```bash
git add -A
git commit -m "descrição clara da alteração"
git push origin main
```

Antes de publicar, validar o JavaScript com:

```bash
node --check assets/js/app.js
node --check assets/js/menu-data.js
git diff --check
```

## 7. Operação e manutenção

1. **Actualizar preços ou itens:** editar `assets/js/menu-data.js`, validar e publicar.
2. **Alterar visual:** ajustar `assets/css/style.css`; preservar a experiência mobile-first e a legibilidade dos preços.
3. **Actualizar QR code:** regenerar `assets/img/qr-code.png` se o URL de produção mudar.
4. **Acompanhar leads:** consultar a Sheet no directório do projecto; filtrar por data e origem.
5. **Ligar ao SIC:** configurar as propriedades do Apps Script quando Nelson disponibilizar o endpoint.
6. **Privacidade:** manter a recolha de contactos limitada ao necessário, controlar o acesso à Sheet e comunicar a finalidade de uso dos dados conforme a política da La Femme.

## 8. Limitações e recomendações

- O número é validado apenas no formato; não confirma se pertence ao visitante.
- O visitante pode aceder ao menu sem fornecer o contacto, por opção explícita de experiência e transparência.
- O catálogo é estático no código. Se a frequência de alterações aumentar, recomenda-se avaliar uma interface de gestão ou uma fonte de dados controlada.
- O CRM/SIC ainda não está ligado; a Google Sheet é neste momento a fonte de registo dos contactos captados.
- Antes de análise comercial, remover os registos `integration-test` criados durante a validação técnica.

## 9. Referências e artefactos

- Produção: [menu-la-femme.surge.sh](https://menu-la-femme.surge.sh/)
- Repositório: [Marca-Digital-AI/menu-la-femme](https://github.com/Marca-Digital-AI/menu-la-femme)
- QR code: `Menu Digital - Documentacao e QR Code/QRCode_MenuDigital_LaFemme_surge.png`
- Documento técnico de integração: `Menu Digital - Documentacao e QR Code/Especificacao_Endpoint_SIC_LaFemme_MarcaDigital_2026.pdf`
- Documento técnico anterior: `Menu Digital - Documentacao e QR Code/Documentacao_Tecnica_MenuDigital_LaFemme_MarcaDigital_2026.pdf`

---

**Documento activo, versão 1.0.**
