// Métodos que iteran sobre un Array.
// Métodos que NO modifican el Array Original (Inmutabilidad).

// Find: Devuelve el primer elemento que cumpla con una condición que se mande en una función.

const multiplosDe5 = [5, 10, 15, 20]

const primerNumeroMayorA10 = multiplosDe5.find(number => number > 10)

console.log(multiplosDe5)
console.log(primerNumeroMayorA10)

// FindIndex()

const randomNumber = [6, 14, 27, 57, 40]
const indexNumber = randomNumber.findIndex(number => number > 50)

console.log(randomNumber)
console.log(indexNumber)