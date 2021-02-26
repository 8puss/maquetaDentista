/* Declaración de variables y constantes para establecer un servidor local con Express */

const express = require("express");
const app = express();
var path = require('path');
var http = require("http");
var PORT = 5000;
var opciones = {
    root: path.join(__dirname)
};

app.get('/', function(req, res, next) {
    res.sendFile('/../public/template/index.html', opciones);
});

const servidor = app.listen(PORT, function(){
    console.log('Listeing http://localHost:' + PORT);
});