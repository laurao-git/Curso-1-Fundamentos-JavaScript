// Math.floor: Redondea hacia abajo el resultado para obtener un número entero.
// Math.random: Genera un número decimal aleatorio entre 0 y 1. 
const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJugador = parseInt (prompt("Adivina el número secreto entre el 1 al 10"));

console.log(`Este es el número con el que juegas ${numeroJugador}`)

if(numeroJugador === numeroSecreto){
    console.log("Congrulations! Adivinaste el número secreto.")
} else if (numeroJugador < numeroSecreto) {
    console.log("El número es demasiado bajo, intenta de nuevo.")
} else {
    console.log("Es demasiado alto. Try again.")
}