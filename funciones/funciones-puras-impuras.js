// Funciones puras: Dos características.
// 1. Da una misma entrada, siempre la misma salida.
// 2. No produce efectos secundarios. ¿Cuáles son esos efectos secundarios?

// Side Effects;
// 1. Modificar variables globales.
// 2. Modificar parámetros de una función.
// 3. Llamadas a API'S (Solicitudes HTTP).
// 4. Imprimir mensajes en pantalla o consola (también Alert).
// 5. Manipulación del DOM.
// 6. Obtener la hora actual.

// Estas funciones hacen que dejen de ser puras.

//Función Pura, los mismos parámetros y retorna lo mismo.
function suma (a, b) {
    return a + b 
}

//Función Impura.
function suma (a, b) {
    console.log("A: ", a)
    return a + b 
}

let total = 0;

function sumaConEfecto (a) {
    total += a
    return total
}

// Función Pura.
function square(x){
    return x * x
}

function añadirdiez (y){
    return y + 10
}

// Sigue siendo una combinación pura.
const number = 5
const finalResult = añadirdiez(square(number))
console.log(finalResult)