// const productName = "Smartphone"
// const price = 499
// const brand = "Techno"

// function getProductDetails () {
//     const productName = "Laptop"
//     const price = 899
    
//     return `The ${productName} costs $${price} and is from the brand ${brand}.`
// }

// console.log(getProductDetails())

// // The Laptop costs $899 and is from the brand Techno.


// const productName = "Smartphone"
// const price = 100
// const brand = "TechCo"

// function getProductDetails () {
//     const productName = "Laptop"
//     const price = 100

//     return `The ${productName} costs $${price} and is from the brand ${brand}.`

// }

// console.log(`The ${productName} costs ${price} and is from the brand ${brand}.`)


// EJEMPLO #3.
// const userPoints = 150

// function checkAccess() {
//     if (userPoints < 100){
//         const message = "Access denied: Insufficient points!"
//         return message
//     }else{
//         const message = "Access granted: Enjoy the premium features!"
//     }
// }

// console.log(checkAccess())


// BLOQUES DE CÓDIGO.

// function example () {...} //

// for (let i = 0; < Array.length; i++) { ... }

// while (count < 5) { ... }

// if (count === 2) { ... }


const globalVariable = "😘"

function localOne(){
    console.log("GLOBAL 1: ", globalVariable)
    // console.log("GLOBAL 1: ", localVariable)

    function localTwo(){
        const carrot = "🥕"
        console.log("LOCAL 2: ", carrot)
    }

    function localThree(){
        console.log("LOCAL 3: ", carrot)
    }

    localTwo()
    localThree()
}

console.log(localOne())