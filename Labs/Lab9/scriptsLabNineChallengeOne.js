function stopTime(){
  alert("You have been on the page for: " + todayTime/1000);
document.getElementById("theDate").innerHTML = todayTime/1000;
}

var start = new Date();
var todayTime =start.getTime();
var todayMonth = start.getMonth() + 1 //fix for zero-based month index
var todayDate = start.getDate();
var todayDay = start.getDay();
var todayHour = start.getHours();
var todayYear = start.getYear();
var todayFullYear = start.getFullYear();
var todaySeconds = start.getSeconds();


console.log(new Date());

//POPUPS

//var myAlert = alert("You have been on the page for: " + todayTime /1000);
//console.log(myAlert);

//  alert("You have been on the page for: " + todayTime/1000;
