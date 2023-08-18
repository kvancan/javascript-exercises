function olustur(){

    var button = document.createElement("button");
    button.innerHTML = "olustur";
    
    button.onclick = olustur;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    

}