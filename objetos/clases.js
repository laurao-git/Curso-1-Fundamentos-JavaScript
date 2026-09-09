// Una clase es un molde del cual se van a construir diferentes objetos.

// Función Constructora.
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

//Instancias.
const persona1 = new Persona("Mariana", 25);

persona1.saludar();