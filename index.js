function upload(){
  var imgcanvas = document.getElementById("canv1");
  var fileinput = document.getElementById("input");
  var image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}