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
