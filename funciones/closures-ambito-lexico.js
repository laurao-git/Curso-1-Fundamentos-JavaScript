/*

CLOSURE: función que tiene acceso a variables de un ámbito externo, incluso después de que esa función haya terminado de ejecutarse.

ÁMBITO LÉXICO: Cada vez que se declara una función, crea su propio ámbito léxico y se puede acceder a las variables dentro de ese ámbito y a las variables en ámbitos superiores.

*/
// Esto es un ámbito léxico, pero una función dentro de una función, también se considera ámbito léxico.
// function outerFunction(){
//     let outerVariable = "I am from outer function."

//     function innterFunction (){
//         console.log(outerVariable)
//     }

//     return innterFunction
// }

// const clousureExample = outerFunction()
// clousureExample()

// function createCounter () {
//     let count = 0

//     return function(){
//         count++
//         console.log(count)
//     }
// }

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

function outer(){
    let message = "Hello, "
    
    function inner (name){
    console.log(message + name)
}

return inner

}

const closureA = outer()
const closureB = outer()

closureA("Alice")
closureB("Bob")

// Ejecutar esa función es lo mismo.
// Tenemos una función y dentro también hay otra, que permite el ingreso de un nombre y el acceso a un nombre externo.
// 