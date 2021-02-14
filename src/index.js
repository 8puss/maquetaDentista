/* Declaración de variables DOM */
var nombre = document.getElementById("nombre");
var contraseña = document.getElementById("contraseña")
var boton = document.getElementById("botonRegistro");
var login = document.getElementById("login");
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
login.addEventListener("submit", crearCliente);
pago.addEventListener("change", inputPago);
cobro.addEventListener("change", inputCobro);
correo.addEventListener("change", inputCorreo);

/* Funciones disparadas en los eventos */
function inputNombre() {
    return nombre = nombre.value;
}

function inputContraseña() {
    return contraseña = contraseña.value;
}

function inputCorreo() {
    return correo = correo.value;
}

function inputEdad() {
    return edad = edad.value;
}

function crearCliente() {
    cliente = new Cliente(nombre, contraseña, edad, correo);
    document.write("¡Registro completado!");
    document.location.href="/public/templates/index.html";
    clientes.push(cliente);
    return clientes
}

function inputPago() {
    pago = pago.value;
    return pago
}

function inputCobro() {
    cobro = cobro.value;
    return cobro
}

function crearDentista() {
    dentista = new Dentista(nombre, contraseña, edad, correo);
    document.write("¡Registro completo!");
    dentistas.push(dentista);
    return dentista
}
