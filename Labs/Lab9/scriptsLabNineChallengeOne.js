function stopTime(){
document.getElementById("theDate").innerHTML = String(todayMonth) +"/" + String(todayDate) +"/" + String(todayFullYear);
}

var start = new Date();
var todayTime =start.getTime();
var todayMonth = start.getMonth() + 1 //fix for zero-based month index
var todayDate = start.getDate();
var todayDay = start.getDay();
var todayHour = start.getHours();
var todayYear = start.getYear();
var todayFullYear = start.getFullYear();


console.log(new Date());

//POPUPS

var myAlert = alert("You have been on the page for: " + todayDate);
console.log(myAlert);
