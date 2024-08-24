function fill(){
var width = document.getElementById('rectangle').offsetWidth;
  while (width<=400) {
    width = width+100;
    width = width+"px"
    console.log(width)
    document.getElementById('rectangle').style.width = width;
  }
}