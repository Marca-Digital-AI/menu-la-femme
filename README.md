# La Femme Sabores — Menu Digital

Página web leve, mobile-first, com o menu do restaurante **La Femme Sabores**. O acesso ao menu é condicionado à introdução do número de telefone do cliente (com botão discreto para continuar sem o fornecer). Um código QR aponta directamente para esta página.

## Estrutura

```
index.html                 Página única (gate + menu + rodapé)
assets/css/style.css       Estilos (paleta e tipografia do Design System oficial)
assets/js/menu-data.js     Dados do menu (pratos, descrições, preços)
assets/js/app.js           Lógica do gate de telefone, navegação e pesquisa
assets/img/                Logótipo, foto de ambiente e QR code
```

Sem build step, sem dependências externas além do Google Fonts (Playfair Display + Inter).

## Como funciona o gate de acesso

- Ao entrar, o visitante vê um ecrã com pedido de número de telefone (formato angolano `9XXXXXXXX`).
- Ao validar o número, o acesso fica desbloqueado **permanentemente neste dispositivo** (via `localStorage`), para que a próxima visita não mostre o ecrã novamente.
- Existe um botão discreto ("Continuar sem indicar número") que desbloqueia o menu **apenas para a visita actual** (via `sessionStorage`) — quem escolher esta opção volta a ver o ecrã em cada nova visita, como pedido.
- A validação do número é apenas de **formato** (sem SMS/OTP), para manter a página estática e sem custos de infraestrutura.

## Activar a captura de leads (opcional, recomendado)

Por definição, os números introduzidos ficam apenas no `localStorage` do telemóvel do cliente (não chegam à equipa do restaurante). Para que o La Femme receba efectivamente os números captados, criar um endpoint gratuito com Google Apps Script + Google Sheets:

1. Criar uma Google Sheet nova (ex.: "La Femme — Leads Menu Digital").
2. `Extensões → Apps Script`, colar este código:

   ```javascript
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     const data = JSON.parse(e.postData.contents);
     sheet.appendRow([new Date(), data.phone, data.source]);
     return ContentService.createTextOutput("ok");
   }
   ```

3. `Implementar → Nova implementação → Aplicação Web`. Executar como "Eu"; acesso "Qualquer pessoa".
4. Copiar o URL gerado e colar em `assets/js/app.js`, na constante `CONFIG.leadsWebhookUrl`.
5. Fazer commit e push da alteração.

Sem este passo, o gate continua a funcionar normalmente (a captura fica apenas local, no aparelho do cliente).

## Publicar / actualizar

Este repositório está preparado para o **GitHub Pages** (branch `main`, pasta raiz). Após qualquer alteração:

```bash
git add -A
git commit -m "..."
git push
```

O GitHub Pages actualiza automaticamente em 1–2 minutos.

## Código QR

O ficheiro `assets/img/qr-code.png` aponta para o URL publicado da página. Se o URL mudar (domínio próprio, por exemplo), é necessário regenerar o QR code.

## Actualizar o menu

Editar `assets/js/menu-data.js` — cada categoria tem uma lista de `items` com `name`, `desc` (opcional) e `price`. Marcar `signature: true` para destacar um prato como assinatura da casa.
