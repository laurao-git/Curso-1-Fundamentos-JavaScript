// Métodos que no iteran el Array.
// Métodos que NO modifican el array original (Inmutability).

// Filter muestra un Array y pasan por una función que debe ser una condición. Si pasa una condición se crea un nuevo Array con los números que pasaron la condición.

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evenNumbers)


// reduce()

const numberReduce = [1, 2, 3, 4, 5]
const sum = numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numberReduce)
console.log(sum)

// Reduce Caso 2.

const words = ['apple', 'banana', 'hello', 'bye', 'goodbye', 'apple', 'orange']

const wordFrecuency = words.reduce((accumulator, currentValue) =>  {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++

    }else{
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordFrecuency)