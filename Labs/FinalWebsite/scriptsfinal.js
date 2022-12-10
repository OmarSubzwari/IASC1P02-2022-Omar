//JS for this main page had to be done in the index.html file. I tried to incorporate it into this JS file however I was having some troubles. I reached out to TY and he mentioned that numbers cannot
//be included in strings. Therefore, I attempted everything I could to get it to work but eventually had to incorporate it into the .html file.


//this is the JS for phone.html page

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
