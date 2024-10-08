const express = require('express')
const server = express()
const bodyParser = require('body-parser')
//Importar para ter acesso ao caminho dos arquivos
const path = require('path')
//Expor arquivos estáticos..
server.use(express.static(__dirname + '/public'));
server.use(express.json()) //Possibilidade de usar JSON

server.use(bodyParser.urlencoded({ extended: true }))

//EXemplo GET
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Adotando-Aumigos/index.html'))
})

server.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'Adotando-Aumigos/cadastro.html'))
})

server.get('/filhotes', (req, res) => {
    res.sendFile(path.join(__dirname, 'Adotando-Aumigos/filhotes.html'))
})



server.listen(3000, () => {
    console.log("servidor no ar...")
})