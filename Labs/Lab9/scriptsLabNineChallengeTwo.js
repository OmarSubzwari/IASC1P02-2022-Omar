function getAge(){
if (myPrompt != null) {
document.getElementById("theYear").innerHTML = "Your birth year is " + (2022 - myPrompt);
}
}

var myPrompt = prompt("What is your age?");
console.log(myPrompt);
