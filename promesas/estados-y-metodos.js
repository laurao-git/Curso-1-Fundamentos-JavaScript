// Las promesas nos ayuda a que el código pase de Síncrono a Asíncrono.

// Dos funciones que se van a disparar de manera síncrona y en medio de esas funciones generar una promesa.

// ¿Qué son las promesas? Permite que el código funcione de manera asíncrona y tienen 3 estados.

// 1. Estado pending.

Promise()
// pending ---> Estado Dependiente. Es cuando la promesa se va a crear. Es el estado que está al pendiente de que se va a generar la promesa.
// fullfilled ---> Estado que viene una vez que se resuelva la promesa, para bien o para mal se pone el estado.
// rejected ---> Que es cuando la promesa no se resolvió. 


// Las promesas manejas 2 tipos de Callbacks.
// 1. Resolve ---> Cuando la promesa se resuelve de forma satisfactoria.
// 2. Reject ---> Cuando la promesa no se puede resolver.

// 2 Métodos Importantes de las Promesas.

// then() ---> Método que se ejecuta cuando la Promesa se resuelve. 
// Uuna vez que la promesa está lista, está fullfilled y un callback de resolve, va a entrar el then.

// catch() ---> Método cuando la promesa no se resuelve y se obtiene el error para poder imprimirlo, que permite saber qué está pasando para que no se resuelva la Promesa.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true;
    if(operationSuccessful) {
        resolve("La operación fue exitosa!")
    } else {
        reject("Falló la operación.")
    }
     }, 2000 );
} )

promise
.then((sucessMessage) => {
    console.log(sucessMessage)
})
.catch((errorMessage) => {
    console.log(errorMessage)
})