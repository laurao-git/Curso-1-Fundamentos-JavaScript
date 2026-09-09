// Métodos que iteran en un Array.
// Métodos que NO modifican el Original Array (Inmutabilidad).

// Map; Métodos de Array, para aplicar una función a cada uno de los elementos del Array y construir un nuevo Array con el resultado.

// Método map()

const numbers = [1, 2, 3, 4, 5]
const numeroCuadrado = numbers.map(num => num * num)

console.log(numbers)
console.log(numeroCuadrado)

// forEach()

const colors = ['red', 'pink', 'blue']
const iterarColores = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iterarColores)


// Exercise; Fahrenheit to Celsius conversion.

const temperaturaFahrenheit = [32, 68, 95, 212]
const temperaturaCelsius = temperaturaFahrenheit.map(fahrenheit => (5/9) * (fahrenheit / 32))

console.log('Temperaturas en Fahrenheit: ', temperaturaFahrenheit)
console.log('Temperaturas en Celsius: ', temperaturaCelsius)

// Exercise; Sum of Elements in an Array.

const newNumbers = [1, 2, 3, 4, 5]

let sum = 0

newNumbers.forEach(number => {
    sum = sum + number
    // sum += number ----> lo mismo pero más abreviado.
})

console.log('Array de Números: ', newNumbers)
console.log('Suma de Números: ', sum)