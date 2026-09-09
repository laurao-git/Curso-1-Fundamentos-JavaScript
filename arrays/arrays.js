// ¿Qué es un Array? - Mutabilidad e Inmutabilidad.
// Definición; Normalmente se escriben variables con valores. Con los Arrays se pueden guardar muchos valores en una sola variable.
// Otra carecterística es que son objetos.

// How to create an Array?

// 1. new Array() or Array().

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const numbers = Array(1, 2, 3, 4, 5)
console.log(numbers)

// 2. Array Literal Sintaxis. 

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

const recipeIngredientes = [
    'Flour',
    true,
    2, 
    { ingredient: 'Milk', quantity: '1 cup'},
    false
]

// Acceso a Array Elementos.

const firstFruit = fruits[0]
console.log(firstFruit)

// Length Proprerty.

const numberOfFruits = fruits.length
console.log(numberOfFruits)


