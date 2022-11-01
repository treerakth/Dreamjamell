function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
  .setTitle('WebApp - More Tables')
  .addMetaTag('viewport', 'width=device-width, inital-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
 
 
/* PROCESS FORM */
function processForm(formObject){  
  var result = "";
  if(formObject.searchtext){//Execute if form passes search text
      result = search(formObject.searchtext);
  }
  return result;
}
 
//SEARCH FOR MATCHED CONTENTS 
function search(searchtext){
  var spreadsheetId   = '1B7h-SJadbTyPpAuBN71I0yNeQkiPH4_swhNUoy4hyKM'; //** ID ของ Sheet ที่ดึงข้อมูล
  var dataRange        = 'Data!A2:D';                                    //** สำหรับกำหนดขนาดของตาราง
  var data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRange).values;
  var ar = [];
  
  data.forEach(function(f) {
    if (~f.toString().toLowerCase().indexOf(searchtext.toString().toLowerCase())) {
      ar.push(f);
    }
  });
  return ar;
}
