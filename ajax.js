


function ajax(gewicht, lengte) {
  let debug = true;
  let controlScript = "php.php";
  let xmlhttp = new XMLHttpRequest();
  let httpString = controlScript + "?gewicht=" + gewicht + "&lengte_cm=" + lengte;
  let httpResponse = "";
  if (debug) console.log(httpString);


  xmlhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
      console.log('test');
      if (debug) console.log("http response = " + xmlhttp.responseText);
      resultaat.innerHTML = this.responseText;
    }
  }
  xmlhttp.open("GET", httpString, true);
  xmlhttp.send();
}
