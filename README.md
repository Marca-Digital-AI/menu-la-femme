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

## Activar a captura de leads (necessário para o CRM)

Por definição, os números introduzidos ficam apenas no `localStorage` do telemóvel do cliente — não chegam a lado nenhum. Para que os números captados cheguem efectivamente à equipa do La Femme (e, mais tarde, ao CRM do Nelson), este repositório inclui um relay pronto a usar em `backend/leads-relay.gs`.

**Porquê um relay em vez de ligar directamente ao CRM:** a arquitectura real do CRM do Nelson não é conhecida por quem construiu este site. Em vez de adivinhar um formato de integração, o relay funciona como intermediário estável: o site fala sempre com o mesmo URL (o do relay); o destino final (Google Sheet e/ou CRM) pode mudar sem nunca ser preciso voltar a mexer no site ou voltar a publicar.

### Passo 1 — Publicar o relay (registo garantido, ~3 minutos)

1. Criar uma Google Sheet nova (ex.: "La Femme — Leads Menu Digital").
2. `Extensões → Apps Script`, apagar o conteúdo por omissão e colar o conteúdo de `backend/leads-relay.gs`.
3. `Implementar → Nova implementação → Aplicação Web`. Executar como "Eu"; acesso "Qualquer pessoa".
4. Copiar o URL gerado (termina em `/exec`) e colar em `assets/js/app.js`, na constante `CONFIG.leadsWebhookUrl`.
5. Fazer commit e push da alteração.

A partir deste ponto, cada número capturado no gate fica registado na Google Sheet, com data/hora — nada se perde, mesmo antes de existir ligação ao CRM.

### Passo 2 — Ligar ao CRM do Nelson (quando o endpoint dele existir)

Pedir ao Nelson um URL de webhook do CRM que aceite `POST` com corpo JSON:

```json
{ "phone": "+244923456789", "restaurant": "La Femme Sabores", "source": "menu-digital", "timestamp": "2026-07-03T12:00:00.000Z" }
```

No projecto Apps Script: `Ficheiro → Propriedades do projecto → Propriedades do script` → adicionar `CRM_WEBHOOK_URL` com esse endereço. **Não é preciso alterar nem voltar a publicar o site** — o relay passa a reencaminhar automaticamente, mantendo sempre a cópia na Google Sheet como registo de segurança.

Se o CRM do Nelson não conseguir expor um webhook próprio, o mesmo relay serve de base para o Nelson ler os dados directamente na Google Sheet (API do Google Sheets) ou continuar a receber por reencaminhamento assim que ele tiver um endpoint.

Sem o Passo 1, o gate continua a funcionar normalmente (a captura fica apenas local, no telemóvel do cliente).

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
