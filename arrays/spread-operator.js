// 1. Copiar un Array.

const originalArray = [1, 2, 3, 4, 5]
const copiaDeUnArray = [...originalArray]

console.log(originalArray)
console.log(copiaDeUnArray)

// 2. Combinación de Arrays.

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const arrayCombinado = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(arrayCombinado)

// 3. Crear Arrays con Elementos adicionales.

const baseArray = [1, 2, 3]
const arratConAdicionalElemento = [...baseArray, 4, 5, 6]

console.log(baseArray)
console.log(arratConAdicionalElemento)

// 4. Pasar Elementos a Funciones.

function sum (a, b, c){
    return a + b + c
}

const numbers = [1, 2, 3]
const result = sum(...numbers)

console.log(result)