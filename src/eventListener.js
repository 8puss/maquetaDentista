/* Declaración de variables DOM */
var nombre = document.getElementById("nombre");
var contraseña = document.getElementById("contraseña")
var boton = document.getElementById("botonRegistro");
var botonlogin = document.getElementById("botonLogin");
var formulario = document.getElementById("formulario");
var pago = document.getElementById("pago");
var cobro = document.getElementById("cobro");
var edad = document.getElementById("edad");
var correo = document.getElementById("correo");
var clientes = [];
var dentistas = [];

/* Declaración de eventos */
nombre.addEventListener("change", inputNombre);
contraseña.addEventListener("change", inputContraseña);
edad.addEventListener("change", inputEdad);
formulario.addEventListener("submit", crearCliente);
pago.addEventListener("change", inputPago);
cobro.addEventListener("change", inputCobro);
correo.addEventListener("change", inputCorreo);

/* Funciones disparadas en los eventos */
function inputNombre() {
    console.log(nombre.value);
    return nombre = nombre.value;
}

function inputContraseña() {
    console.log(contraseña.value);
    return contraseña = contraseña.value;
}

function inputCorreo() {
    console.log(correo.value);
    return correo = correo.value;
}

function inputEdad() {
    console.log(edad.value);
    return edad = edad.value;
}

function crearCliente() {
    cliente = new Cliente(nombre, contraseña, edad, correo);
    console.log(cliente);
    document.write("¡Registro completo! <br /> <a href=\"./login.html\">Inicia Sesión</a>");
    clientes.push(cliente.nombre);
    return cliente 
}

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

function iniciarSesion() {
    /*codigo de inicio de sesión*/
    console.log("enviar codigo de inicio de sesion");
}