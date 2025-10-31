const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server pokrenut na: ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html')
})

const users = [
    {
        id: 1,
        ime: 'Luka',
        prezime: 'Modrić'
    },
    {
        id: 2,
        ime: 'Zoran',
        prezime: 'Milanović'
    },
    {
        id: 3,
        ime: 'Dado',
        prezime: 'Pršo'
    }

]
app.get('/users', (req, res) => {
    res.json(users)
})
