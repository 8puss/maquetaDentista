/*Declaración de variables y objtos DOM */
var pago = document.getElementById("pago");
var cobro = document.getElementById("cobro");

/*Declaración de eventos */
pago.addEventListener("change", inputPago);
cobro.addEventListener("change", inputCobro);

/* Funciones disparadas en los eventos */
function inputPago() {
    console.log(pago.value);
    pago = pago.value;
    return pago
}

function inputCobro() {
    console.log(cobro.value);
    cobro = cobro.value;
    return cobro
}