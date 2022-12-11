//JS for this main page had to be done in the index.html file. I tried to incorporate it into this JS file however I was having some troubles. I reached out to TY and he mentioned that numbers cannot
//be included in strings. Therefore, I attempted everything I could to get it to work but eventually had to incorporate it into the .html file.

//cart page JS -- Quotes from: https://coda.io/@mark-davis/random-quote

var quotes = [
        'To me, busy implies that the person is out of control of their life. By: Derek Sivers',

        "It is impossible to manufacture or imitate love. By: Horace Slughorn",

        "Being different isn't a bad thing. I mean that you are brave enough to be yourself. By: Luna Lovegood",

        "Do the best you can until you know better. Then when you know better, do better. By: Maya Angelou",

        "Almost everything will work again if you unplug it for a few minutes, including you. By: Anne Lamott",

        "Every human life is worth the same, and worth saving. By: Kingsley Shacklebolt",

        "Have a biscuit, Potter. By: Minerva McGonagall",

        "Happiness can be found even in the darkest of times if one only remembers to turn on the light. By: Albus Dumbledore",

        "Socks are Dobby’s favorite, favorite clothes, sir! By: Dobby",
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}
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

//this is the JS for accessories.html page
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//this is the JS for cart page progress bar

var progressBar = document.getElementById('progress');
    function updateProgress(newValue) {
      progressBar.value = newValue;
      progressBar.getElementsByTagName('span')[0].textContent = newValue;
    }

    //DOM load event
window.addEventListener("load", () => {

    const spotlight = document.querySelector('.spotlight');
    let spotlightSize = 'transparent 20%, rgba(0, 0, 0, 0.7) 30%';

    window.addEventListener('mousemove', e => updateSpotlight(e));
    window.addEventListener('mousedown', e => {
        spotlightSize = 'transparent 10%, rgba(0, 0, 0, 0.9) 25%';
        updateSpotlight(e);
    });

    window.addEventListener('mouseup', e => {
        spotlightSize = 'transparent 20%, rgba(0, 0, 0, 0.7) 30%';
        updateSpotlight(e);
    });

    function updateSpotlight(e) {

			spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
    }
});
