var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
var color = "black";
var width = 1;
var last_x, last_y;
var newHeight = screen.height - 50;
var newWidth = screen.width - 70;

if (screen.width < 992) {
  document.getElementById("canvas1").width = newWidth;
  document.getElementById("canvas1").height = newHeight;
  document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", function (e) {
  color = document.getElementById("color").value;
  width = document.getElementById("lineWidth").value;
  last_x = e.touches[0].clientX - canvas.offsetLeft;
  last_y = e.touches[0].clientY - canvas.offsetTop;
});

canvas.addEventListener("touchmove", function (e) {
  var currentX = e.touches[0].clientX - canvas.offsetLeft;
  var currentY = e.touches[0].clientY - canvas.offsetTop;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.moveTo(last_x, last_y);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();
  last_x = currentX;
  last_y = currentY;
});

function erase() {
  ctx.clearRect(0, 0, newWidth, newHeight);
}
