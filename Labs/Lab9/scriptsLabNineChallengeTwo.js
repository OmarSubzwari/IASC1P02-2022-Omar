function getAge(){
if (myPrompt != null) {
document.getElementById("theYear").innerHTML = "Your birth year is " + (2022 - myPrompt);
}
}

var myPrompt = prompt("What is your age?");
console.log(myPrompt);

//citation for null that is used in javascript code.
//https://stackoverflow.com/questions/71075523/asking-the-user-to-re-enter-year-of-birth-until-birth-year-current-year // null idea was used from user "Kato" on the website stack overflow/


//var start = new Date();
//var todayMonth = start.getMonth() + 1 //fix for zero-based month index
//var todayDate = start.getDate();
//var todayDay = start.getDay();
//var todayHour = start.getHours();
//var todayYear = start.getYear();
//var todayFullYear = start.getFullYear();
//var todaySeconds = start.getSeconds();
