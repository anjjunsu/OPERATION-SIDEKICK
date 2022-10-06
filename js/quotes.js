const quotes = [
    {
        quote: "끝까지 가면 내가 다 이겨",
        by: "Junsu An",
    },
    {
        quote: "가보자고",
        by: "Junsu An",
    },
    {
        quote: "That which does not kill us makes us stronger",
        by: "Friedrich Nietzsche",
    },
    {
        quote: "Life is not fair. Get used to it",
        by: "Bill Gates",
    },
    {
        quote: "A man is but what he knows",
        by: "Sir Francis Bacon",
    },
]

const quote = document.querySelector("#quote span:first-child");
const by = document.querySelector("#quote span:last-child");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = randomQuote.quote;
by.innerText = randomQuote.by;

