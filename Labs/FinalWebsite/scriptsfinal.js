
//arrowUp.onclick = function()
//{
  //rotateSum = rotateValue + "rotate(-90deg)";
  //circle.style.transform = rotateSum;
  //rotateValue = rotateSum;
//}


function arrowUpRotate(){
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}

var circle = document.getElementById("circle")
var arrowUp = document.getElementById("arrowUp");
var arrowDown = document.getElementById("arrowDown");

var rotateValue = circle.style.transform;
var rotateSum;
