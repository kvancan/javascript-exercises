
function toplama(){
    

        console.log("adana");
        
        ilksayi = document.getElementById("ilksayi").value ;
        ikincisayi = document.getElementById("ikincisayi").value;

        ilksayi = parseInt(ilksayi);
        ikincisayi = parseInt(ikincisayi);


        sonuc = ilksayi + ikincisayi ;

        document.getElementById("sonuc").value = sonuc;

        console.log(ilksayi);
}

function cikarma(){
    

    console.log("adana");
    
    ilksayi = document.getElementById("ilksayi").value;
    ikincisayi = document.getElementById("ikincisayi").value;

    ilksayi = parseInt(ilksayi);
    ikincisayi = parseInt(ikincisayi);


    sonuc = ilksayi - ikincisayi ;

    document.getElementById("sonuc").value = sonuc;
}

function carpma(){
    

    console.log("adana");
    
    ilksayi = document.getElementById("ilksayi").value;
    ikincisayi = document.getElementById("ikincisayi").value;

    sonuc = ilksayi * ikincisayi ;

    document.getElementById("sonuc").value = sonuc;
}

function bolme(){
    

    console.log("adana");
    
    ilksayi = document.getElementById("ilksayi").value;
    ikincisayi = document.getElementById("ikincisayi").value;

    sonuc = ilksayi / ikincisayi ;

    document.getElementById("sonuc").value = sonuc;
}

