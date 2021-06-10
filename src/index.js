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
app.use('/img', express.static("public/img"));

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

setTimeout(() => {
    app.get('/login', (req, res, next) => {

        var fileName = "login.html";
        res.sendFile(fileName, options, function (err) {
            if (err) {
                next(err);
            } else {
            }   console.log('Sent:', fileName);
                next();
        });
    })
}, 500);

setTimeout(() => {
    app.get('/signin', (req, res, next) => {

        var fileName = "signin.html";
        res.sendFile(fileName, options, function (err) {
            if (err) {
                next(err);
            } else {
            }   console.log('Sent:', fileName);
                next();
        });
    })
}, 500);

setTimeout(() => {
    app.get('/ledger', (req, res, next) => {

        var fileName = "ledger.html";
        res.sendFile(fileName, options, function (err) {
            if (err) {
                next(err);
            } else {
            }   console.log('Sent:', fileName);
                next();
        })
    })
}, 500);

const server = app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("listening on http://localhost:" + PORT +"/");
})