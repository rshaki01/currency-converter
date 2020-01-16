
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('dollarInput').addEventListener
('input', function (e){
  if (e.target.value > 0) {

    // CAD conversion
    if (document.getElementById('currencySelect').value == 1) {
      document.getElementById('output').style.visibility = 'visible';
      let dollars = e.target.value;
      document.getElementById('cadOutput').innerHTML = dollars;
      document.getElementById('usdOutput').innerHTML = dollars * 0.75;
      document.getElementById('gbpOutput').innerHTML = dollars * 0.58;
      document.getElementById('yuanOutput').innerHTML = dollars * 5.29;
      document.getElementById('takaOutput').innerHTML = dollars * 63.79;
   }

   // USD conversion
   if (document.getElementById('currencySelect').value == 2) {
     document.getElementById('output').style.visibility = 'visible';
     let dollars = e.target.value;
     document.getElementById('cadOutput').innerHTML = dollars * 1.33;
     document.getElementById('usdOutput').innerHTML = dollars;
     document.getElementById('gbpOutput').innerHTML = dollars * 0.77;
     document.getElementById('yuanOutput').innerHTML = dollars * 7.04;
     document.getElementById('takaOutput').innerHTML = dollars * 84.90;
  }

  // GBP conversion
  if (document.getElementById('currencySelect').value == 3) {
    document.getElementById('output').style.visibility = 'visible';
    let dollars = e.target.value;
    document.getElementById('cadOutput').innerHTML = dollars * 1.71;
    document.getElementById('usdOutput').innerHTML = dollars * 1.29;
    document.getElementById('gbpOutput').innerHTML = dollars;
    document.getElementById('yuanOutput').innerHTML = dollars * 9.08;
    document.getElementById('takaOutput').innerHTML = dollars * 109.61;
 }

 // Yuan conversion
 if (document.getElementById('currencySelect').value == 4) {
   document.getElementById('output').style.visibility = 'visible';
   let dollars = e.target.value;
   document.getElementById('cadOutput').innerHTML = dollars * 0.19;
   document.getElementById('usdOutput').innerHTML = dollars * 0.14;
   document.getElementById('gbpOutput').innerHTML = dollars * 0.11;
   document.getElementById('yuanOutput').innerHTML = dollars;
   document.getElementById('takaOutput').innerHTML = dollars * 12.07;
}

// Taka conversion
if (document.getElementById('currencySelect').value == 5) {
  document.getElementById('output').style.visibility = 'visible';
  let dollars = e.target.value;
  document.getElementById('cadOutput').innerHTML = dollars * 0.016;
  document.getElementById('usdOutput').innerHTML = dollars * 0.012;
  document.getElementById('gbpOutput').innerHTML = dollars * 0.0091;
  document.getElementById('yuanOutput').innerHTML = dollars * 0.083;
  document.getElementById('takaOutput').innerHTML = dollars;
}

}
});
