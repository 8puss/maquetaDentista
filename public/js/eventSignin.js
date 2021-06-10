/* Declaración de variables DOM */
var nombre = document.getElementById("nombre");
var boton = document.getElementById("botonRegistro");
var edad = document.getElementById("edad");
var correo = document.getElementById("correo");
var contraseña = document.getElementById("contraseña");
var formulario = document.getElementById("formulario");
var clientes = [];
var dentistas = [];

/* Declaración de eventos */
nombre.addEventListener("change", inputNombre);
edad.addEventListener("change", inputEdad);
contraseña.addEventListener("change", inputContraseña);
correo.addEventListener("change", inputCorreo);
formulario.addEventListener("submit", crearCliente);

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
    document.write("¡Registro completo! <br /> Regresa al <a href=\"/\">Inicio</a>");
    clientes.push(cliente.nombre);
    return cliente 
}