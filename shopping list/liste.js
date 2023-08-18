function ekleme() {

var bosluk = document.createElement("br");
bosluk.innerHTML ="";
var body = document.getElementsByTagName("body")[0];
body.appendChild(bosluk);


var yeniurun = document.createElement("b");
yeniurun.innerHTML = document.getElementById("urun").value;
var body = document.getElementsByTagName("body")[0];
body.appendChild(yeniurun);

var silici = document.createElement("button");
silici.innerHTML = "sil";
var body = document.getElementsByTagName("body")[0];
body.appendChild(silici);




    
}