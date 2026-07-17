/**
 * Relay de leads — La Femme Sabores, Menu Digital.
 *
 * Recebe o número de telefone capturado no gate de acesso do menu digital,
 * regista sempre numa Google Sheet (nunca se perde nenhum lead) e, se
 * configurado, reencaminha em simultâneo para o CRM do Nelson.
 *
 * Instalação (ver README.md do repositório para o passo-a-passo completo):
 *   1. Criar uma Google Sheet nova.
 *   2. Extensões → Apps Script → colar este ficheiro inteiro.
 *   3. Implementar → Nova implementação → Aplicação Web (executar como "Eu",
 *      acesso "Qualquer pessoa").
 *   4. Copiar o URL gerado para CONFIG.leadsWebhookUrl em assets/js/app.js.
 *
 * Para ligar ao CRM/SIC do Nelson mais tarde (sem tocar no site):
 *   Ficheiro → Propriedades do projecto → Propriedades do script →
 *   adicionar CRM_WEBHOOK_URL = <url do endpoint do SIC>.
 *   A partir daí, cada lead passa a ser reencaminhado automaticamente,
 *   além de continuar registado nesta sheet como cópia de segurança.
 *
 *   Se o endpoint do SIC exigir autenticação (API key, Bearer token, etc.),
 *   adicionar também duas propriedades do script:
 *     CRM_WEBHOOK_AUTH_HEADER = <nome do cabeçalho, ex.: "Authorization" ou "X-API-Key">
 *     CRM_WEBHOOK_AUTH_VALUE  = <valor do cabeçalho, ex.: "Bearer xxxxxxxx">
 *   Isto é seguro porque estas propriedades só existem do lado do relay
 *   (Apps Script), nunca no site público — o browser do cliente nunca vê
 *   nem a URL nem a chave do SIC.
 */

function doPost(e) {
  var result = { ok: true };

  try {
    var data = JSON.parse(e.postData.contents);
    var phone = String(data.phone || "").trim();

    if (!/^\+244\d{9}$/.test(phone)) {
      return respond({ ok: false, error: "invalid_phone" });
    }

    appendToSheet(data, phone);

    var crmUrl = PropertiesService.getScriptProperties().getProperty("CRM_WEBHOOK_URL");
    if (crmUrl) {
      forwardToCrm(crmUrl, data, phone);
    }
  } catch (err) {
    result = { ok: false, error: String(err) };
  }

  return respond(result);
}

function appendToSheet(data, phone) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Data/Hora", "Telefone", "Restaurante", "Origem", "Reencaminhado ao CRM"]);
  }
  sheet.appendRow([
    new Date(),
    phone,
    data.restaurant || "La Femme Sabores",
    data.source || "menu-digital",
    PropertiesService.getScriptProperties().getProperty("CRM_WEBHOOK_URL") ? "sim" : "ainda não configurado"
  ]);
}

function forwardToCrm(crmUrl, data, phone) {
  var payload = {
    phone: phone,
    restaurant: data.restaurant || "La Femme Sabores",
    source: data.source || "menu-digital",
    timestamp: data.timestamp || new Date().toISOString()
  };

  var props = PropertiesService.getScriptProperties();
  var authHeader = props.getProperty("CRM_WEBHOOK_AUTH_HEADER");
  var authValue = props.getProperty("CRM_WEBHOOK_AUTH_VALUE");
  var headers = {};
  if (authHeader && authValue) {
    headers[authHeader] = authValue;
  }

  try {
    UrlFetchApp.fetch(crmUrl, {
      method: "post",
      contentType: "application/json",
      headers: headers,
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });
  } catch (err) {
    // Falha no reencaminhamento ao CRM não deve perder o registo — já ficou na sheet.
    Logger.log("Falha ao reencaminhar para o CRM: " + err);
  }
}

function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
