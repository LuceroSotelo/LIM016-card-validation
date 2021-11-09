import validator from './validator.js';

const formPago = document.getElementById("form")
const numeroTarjeta = document.getElementById("numeroTarjeta")
let numeroPrueba;
const nombreTarjeta = document.getElementById("nombreTarjeta")
const codigoDeSeguridad = document.getElementById("codigoDeSeguridad")
const parrafo = document.getElementById("warnings")
const modalContainer = document.getElementById("modalContainer")
const cerrar = document.getElementById("cerrar")

//Eliminando espacios en input numeroTarjeta
numeroTarjeta.addEventListener("keyup", (event) => {
    let valorInput = event.target.value;
    numeroTarjeta.value = valorInput
        //eliminando espacios
        .replace(/\s/g, "")
    //Eliminando valores que no sean números del 0 al 9
    //.replace(/\D/g, "")
});

codigoDeSeguridad.addEventListener("keyup", (event) => {
    let valorInput = event.target.value;
    codigoDeSeguridad.value = valorInput
        //eliminando espacios
        .replace(/\s/g, "")
        //Eliminando valores que no sean números del 0 al 9
        .replace(/\D/g, "")
});

//funcion para obtener el valor del input numeroTarjeta y validarlo según el algoritmo de Luhn
function validacionLuhn(event) {
    event.preventDefault();
    const nTarjetaValidado = validator.isValid(numeroPrueba);
    console.log(nTarjetaValidado)
}
formPago.addEventListener("submit", validacionLuhn);

//funcion para enmascarar numeroTarjeta.value al hacer "click" en input "nombre tarjeta"
const mostrarEnmascarado = document.getElementById("nombreTarjeta");
mostrarEnmascarado.addEventListener("click", enmascararNumeroTarjeta);


function enmascararNumeroTarjeta(event) {
    event.preventDefault();
    let nTarjetaEnmascarada = (validator.maskify(numeroTarjeta.value));
    numeroPrueba = numeroTarjeta.value;
    numeroTarjeta.value = nTarjetaEnmascarada,
        console.log(nTarjetaEnmascarada)
}

//Validación del formulario
formPago.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.classList.remove("hide");
    parrafo.innerHTML = ""

    if (validator.isValid(numeroPrueba) === false) {
        warnings += `El número de la tarjeta no es válido <br>`
        entrar = true
    }
    if (nombreTarjeta.value.length < 3) {
        warnings += `Ingresar Nombre y Apellido <br>`
        entrar = true
    }
    if (codigoDeSeguridad.value.length < 3) {
        warnings += `Ingresar código de seguridad <br>`
        entrar = true
    }
    if (entrar) {
        parrafo.innerHTML = warnings
    }
    else {
        parrafo.innerHTML = ("Datos válidos");
        //Mostrando ventana popup
        modalContainer.classList.add("show")
    }
})

//Cerrar ventana popup
cerrar.addEventListener("click", () => {
    modalContainer.classList.remove("show");
    formPago.reset();
    parrafo.classList.add("hide")
});






