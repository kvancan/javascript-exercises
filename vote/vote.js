var oylar = 0;
var oylar1 = 0;
var oylar2 = 0;

function onClick() {
  oylar += 1;
  document.getElementById("oylar").innerHTML = oylar;
  percent();
  percent1();
  percent2();
};

function onClick1() {
    oylar1 += 1;
    document.getElementById("oylar1").innerHTML = oylar1;
    percent();
    percent1();
    percent2();
  };

  function onClick2() {
    oylar2 += 1;
    document.getElementById("oylar2").innerHTML = oylar2;
    percent();
    percent1();
    percent2();
  };

function percent() {

  toplam = oylar+oylar1+oylar2; 
  oylaryuzde = oylar/toplam;
  oylaryuzde = oylaryuzde*100;
  document.getElementById("percent").innerHTML = oylaryuzde;

}
function percent1() {

  toplam = oylar+oylar1+oylar2; 
  oylaryuzde1 = oylar1/toplam;
  oylaryuzde1 = oylaryuzde1*100;

  document.getElementById("percent1").innerHTML = oylaryuzde1;

}
function percent2() {

  toplam = oylar+oylar1+oylar2; 
  oylaryuzde2 = oylar2/toplam;
  oylaryuzde2 = oylaryuzde2*100;

  document.getElementById("percent2").innerHTML = oylaryuzde2;

}