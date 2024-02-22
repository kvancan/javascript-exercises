function adayekle(){

    var node = document.getElementById("referans");
    var clone = node.cloneNode(true);
    clone.style.display = "block";

    clone.firstElementChild.innerHTML = document.getElementById("aday").value

    document.getElementsByTagName("body")[0].appendChild(clone);

    document.getElementById("aday").value = ""

}

function sil(buton) {
    
    buton.parentElement.remove();
    

}