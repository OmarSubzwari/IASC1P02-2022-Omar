
//arrowUp.onclick = function()
//{
  //rotateSum = rotateValue + "rotate(-90deg)";
  //circle.style.transform = rotateSum;
  //rotateValue = rotateSum;
//}


function arrowUpRotate(){
  rotateValue = currentValue + 90;
  circle.style.transform = "rotate(" + rotateValue + "deg)";
  currentValue = rotateValue;

}

var circle = document.getElementById("circle")
var arrowUp = document.getElementById("arrowUp");
var arrowDown = document.getElementById("arrowDown");

var rotateValue = circle.style.transform;
var rotateSum;
