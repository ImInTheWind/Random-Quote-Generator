const express = require('express');
const cors = require('cors')
let app = express();
let PORT = 9999;
app.use(express.json())
app.use(cors())

//GET
app.get('/', (req, res) => {
    const url = 'https://zenquotes.io/api/quotes'

    console.log('fetching quotes')
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        res.status(200).send(data)
    })
    .catch(console.log)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})