document.write("evet");

console.log("sa")
 



function cekirge() {

    console.log("adana");
    
    document.getElementsByTagName("html")[0].style.backgroundColor = getRandomColor()
    
    butonekleme();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
function butonekleme(){

    
var button = document.createElement("button");
button.innerHTML = "sa";

button.onclick = cekirge;
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);


}

function renk(){

    document.getElementsByTagName("html")[0].style.Color = getRandomColor()

}

function yazıcı(){

var ismail = document.createElement("p");
ismail.innerHTML = "elhem";
ismail.style.color= getRandomColor();
var body = document.getElementsByTagName("body")[0];
body.appendChild(ismail);




}