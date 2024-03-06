var oylar = 0;
var oylar1 = 0;

function onClick() {
  oylar += 1;
  document.getElementById("oylar").innerHTML = oylar;
};

function onClick1() {
    oylar1 += 1;
    document.getElementById("oylar1").innerHTML = oylar1;
  };

function percent() {

  oylaryuzde = oylar/oylar1;

  document.getElementById("percent").innerHTML = oylaryuzde;


}
