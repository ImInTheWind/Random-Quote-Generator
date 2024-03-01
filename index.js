let quote = document.getElementById("quoteContent")
let author = document.getElementById("quoteAuthor")

const apiUrl = "https://zenquotes.io/api/quotes"

async function getQuote() {
    const response = await fetch(apiUrl, {mode: "no-cors"})
    console.log(response)
    const data = await response.json();
    console.log(data)
}

function randNum(x) {
    x = Math.floor(Math.random() * 50)
    if (x < 0) then (x = 0)
    if (x >= 50) then (x = 49)
    console.log(x)
}

function changeQuote() {
    
}

getQuote()