// Un Array es un objeto y puede tener diferentes métodos.
// Transformar el valor original.
// O crear un Array nuevo.


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


// -------------- Muta e Inmutabilidad. --------------

// Mutability.
fruits.push('Sandía')
console.log(fruits)

// Inmutabilidad.

const newFruits = fruits.concat(['grape', 'kiwi'])
console.log(fruits)
console.log(newFruits)

// Verificar Arrays con Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray)

// Practicar Ejercicio: Suma de todos los Elementos de un Array.

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbersArray.length; i++){
    sum += numbersArray[i]
}

console.log(sum)

