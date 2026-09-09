
// Array con function.
const saludo = function (nombre){
    return `Hola, ${nombre}`
}

// Array sin function.
const nuevosaludo = (nombre) => {
    return `Hola, ${nombre}`
}

// Function Flecha con un ----> Retorno Implícito.

// Cuando es un solo parámetro, se puede dejar sin paréntesis (nombre).
const nuevosaludoImplicito = nombre => `Hola, ${nombre}`

// Cuando son dos o más parámetros, se usa con paréntesis (nombre, apellido, etc).
const nuevosaludoImplicitoConDosParametros = (nombre, apellido) => `Hola, I'm ${nombre} ${apellido}`

// Lexical Binding.
const personajeFicticio = {
    name: "Uncle Ben",
    mensajeConTradicionalFuncion: function (message){
        console.log(`${this.name} says: ${message}`)
    },

    mensajeConFuncionFlecha: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

/* En este exempla, la function traditional accede correctamente al this.name, mientras que la Arrow Function no lo hace, ya que las Arrow Functions no vinculan su propio this.*/


personajeFicticio.mensajeConTradicionalFuncion('With great power comes great responsability.')

personajeFicticio.mensajeConFuncionFlecha('Beware of Doctor Octopus.')