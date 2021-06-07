/**
 *Creando servidor con express
 *Definiendo constantes del servidor e importando express 
 */

const express = require('express');
const app = express();
const PORT = 8000;
const server = app.listen(PORT, () => {
    console.log("listening");
})

app.get('/', (res, req, next) => {
    res.sendFile("../public/templates/index.html");
})

