import Framework7 from 'framework7/framework7.esm.bundle'
import $$ from 'dom7';
const HST = require("./HST.js"); 

// Init F7
const app = new Framework7({
  root: '#app',
  theme: 'auto',
  // Fix for iPhone X notch
  statusbar: {
    overlay: Framework7.device.ios ? Framework7.device.webView || Framework7.device.cordova : 'auto',
  },
});

let nSubtotal = 0;
var province="ON";
$$("#adding").on("submit", evt=>{
  evt.preventDefault();
  const oData = app.form.convertToData("#adding")
  //alert("adding: " + oData.amount);
  nSubtotal += Number(oData.amount);
  province=String(oData.province);
  const nHst = HST.calculate(province, nSubtotal);
  $$("#hst").html(nHst);
  $$("#total").html(nHst + nSubtotal);
  $$("#subtotal").html(nSubtotal);
  $$("#amounts").prepend("<p>"+ oData.amount + "</p>");
});