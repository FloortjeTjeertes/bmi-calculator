let bereken = document.getElementById('bereken');
let lengte = document.getElementById('lengte');
let gewicht = document.getElementById('gewicht');
let resultaat = document.getElementById('resultaat');
let input = document.getElementById('gewicht');

gewicht.addEventListener('focus', function(){

 gewicht.value = "";

})

lengte.addEventListener('focus', function(){
  lengte.value= "";

})

bereken.addEventListener('click',function(){
  let lengte_cm  = lengte.value; // read inoput
  let gewicht_kg = gewicht.value;
  ajax(lengte_cm, gewicht_kg);
})

function clearResults(){}
