/*declaración de variables DOM*/

var img1 = document.getElementById('carousel_img1');
var img2 = document.getElementById('carousel_img2');
var img3 = document.getElementById('carousel_img3');
var img4 = document.getElementById('carousel_img4');

/* Declaración de eventos */

img1.addEventListener("click",eventoImagen);
img2.addEventListener("click",eventoImagen);
img3.addEventListener("click",eventoImagen);
img4.addEventListener("click",eventoImagen);

/* Funciones disparadas en los eventos */

function eventoImagen(x) {
    console.log(x);
}