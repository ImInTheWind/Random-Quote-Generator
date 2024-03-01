let quote = document.getElementById("quoteContent")
let author = document.getElementById("quoteAuthor")
let quoteList = 0

const apiUrl = "http://localhost:9999"

async function getQuote() {
    const response = await fetch(apiUrl)
    console.log(response)
    const data = await response.json();
    quoteList = data
    console.log(quoteList)
}

function randNum() {
    x = Math.floor(Math.random() * 50)
    if (x < 0) then (x = 0)
    if (x >= 50) then (x = 49)
    return x
}

function changeQuote() {
    let num = randNum()
    let chosen = quoteList[num]
    author.textContent = chosen.a
    quote.textContent = chosen.q
    console.log(chosen)
}

getQuote()