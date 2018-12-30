
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "katalog.xml", true);
  xhttp.send();
}

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>NO</th><th>NAMA</th><th>NIM</th><th>PRODI</th><th>IPK</th><th>ALAMAT</th></tr>";
  var x = xmlDoc.getElementsByTagName("profile");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("no")[0].childNodes[0].nodeValue +
    "</center></td><td>" +
    x[i].getElementsByTagName("nama")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("nim")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("prodi")[0].childNodes[0].nodeValue +
    "</center></td><td>" +
    x[i].getElementsByTagName("ipk")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("alamat")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("tampil").innerHTML = table;
}
