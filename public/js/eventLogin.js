/* Declaración de variables DOM */
var contraseña = document.getElementById("contraseña");
var botonlogin = document.getElementById("botonLogin");
var formulario = document.getElementById("formularioLogin");
var correo = document.getElementById("correo");

/* Declaración de eventos */
contraseña.addEventListener("change", inputContraseña);
correo.addEventListener("change", inputCorreo);
formulario.addEventListener("submit", iniciarSesion);

/* Funciones disparadas en los eventos */

function inputContraseña() {
    console.log(contraseña.value);
    return contraseña = contraseña.value;
}

function inputCorreo() {
    console.log(correo.value);
    return correo = correo.value;
}

function iniciarSesion() {
    document.write("¡Inicio de sesión exitoso! <br /> Consulta tu <a href=\"/ledger\">balance</a>");
}

/*exportar */
 