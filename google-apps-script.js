// ============================================================
//  Google Apps Script — no-cors compatible version
//  Extensions → Apps Script → Save → Deploy → New Deployment
//  Type: Web App | Execute as: Me | Who has access: Anyone
// ============================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add headers on first run
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['التاريخ', 'ID', 'البريد الإلكتروني', 'عدد الأطفال', 'ساعات الاستخدام', 'مهتم؟', 'رسالة']);
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#1A6BCC').setFontColor('#ffffff');
    }

    // Works whether Content-Type is application/json or text/plain
    var raw  = e.postData ? e.postData.contents : '{}';
    var data = JSON.parse(raw);

    sheet.appendRow([
      new Date(),
      data.id          || '',
      data.gmail       || '',
      data.n_childs    || '',
      data.n_hours     || '',
      data.interested  || '',
      data.message     || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
