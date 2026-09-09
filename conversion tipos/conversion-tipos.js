// Lenguajes de Programación Compilados: C, C++, Rust, Go, Swift.
// Compilados = Chequeo estático de tipos.
// Lenguajes Interpretados: JavaScript, Python, Ruby, PHP.
// Interpretados = Chequeo dinámico de tipos.

// Dos tipos de Conversión: Implícita y Explícita.
// Implícita: 2 + True.
// Explícita: string(), number(), boolean().

// Explicit Type Casting.

const string = '42'
const integer = parseInt(string)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(typeof decimal)


// Implicit Type Casting.

const sum = '5' + 3
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log('========================')
console.log(stringValue + stringValue) // Concatena
console.log(stringValue + numberValue) // Concatena
console.log(stringValue + booleanValue) // Concatena
console.log(numberValue + stringValue) // Concatena
console.log(numberValue + numberValue) // Suma
console.log(numberValue + booleanValue) // Suma
console.log(booleanValue + stringValue) // Concatena
console.log(booleanValue + numberValue) // Suma
console.log(booleanValue + booleanValue) // Suma

