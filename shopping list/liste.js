
function kopyala(){

    var node = document.getElementById("referans");
    var clone = node.cloneNode(true);
    clone.style.display = "block";

    clone.firstElementChild.innerHTML = document.getElementById("urun").value

    document.getElementsByTagName("body")[0].appendChild(clone);

    document.getElementById("urun").value = ""

}

function sil(buton) {
    
    buton.parentElement.remove();
    

}

document.getElementById("urun").addEventListener("keydown", function(event) {
    // If the user presses the "Enter" key on the keyboard
    console.log(event.key);
    if (event.key === "Enter") {
        
        kopyala();
        

    }
  });