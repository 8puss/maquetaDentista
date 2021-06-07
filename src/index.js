/**
 *Creando servidor con express
 *Definiendo constantes del servidor e importando express 
 */

const express = require('express');
const app = express();
const PORT = 8000;
const PATH = require('path');
const options = {
    root: PATH.join("../maquetaDentista/public/templates/")
};

/*agregando archivos estáticos*/ 

app.use('/css', express.static("public/css"));
app.use('/js', express.static("public/js"));

/*generando peticiones http sin middleware*/

app.get('/', (req, res, next) => {

    var fileName = "index.html";
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
        }   console.log('Sent:', fileName);
            next();
    });
})

app.get('/login.html', (req, res, next) => {

    var fileName = "login.html";
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
        }   console.log('Sent:', fileName);
            next();
    });
})

app.get('/singin.html', (req, res, next) => {

    var fileName = "singin.html";
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
        }   console.log('Sent:', fileName);
            next();
    });
})

const server = app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("listening on http://localhost:" + PORT +"/");
})