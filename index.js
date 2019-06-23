var express = require('express');

var app = express();

app.use(require('./routes.js'));
//libera o conteudo que esta dentro da pasta publico para visualização
//na web, seguindo endereço real no diretorio.
app.use(express.static('publico'));

//add uma pasta virtual, default para carregar arquivos.
app.use('/teste', express.static(__dirname + '/publico'));

//rota '/' enviando resposta 'Edwilson & Bianca'

//port 2018
app.listen("2018");