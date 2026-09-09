// const persona = {
//     nombre: "Diego",
//     apellido: "Martínez"
// }


// Función Constructora para construir objetos.
// Función de manera masiva.


// va con mayúscula. // FUNCIÓN CONSTRUCTORA:
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

// Generar una instancia ---> Se le llama a todos los objetos que vengan de esa función constructora.
// Se llamarán INSTANCIAS.

// INSTANCIAS:
const persona1 = new Persona("Juan", "Pérez", 30);

console.log(persona1);



const persona2 = new Persona("Diego", "Martínez", 40);

console.log(persona2)


Persona.prototype.telefono = "555-555-555";

// El prototipo es la copia de la Función Constructora que se encarga de compartir cada una de las propiedades o métodos que existen en mi función. 
// La propiedad Prototype no se agrega directamente a la función constructora, sino se está agregando al Prototipo de  la función constructora.

persona1.nacionalidad = "Mexicano";

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

persona1.saludar();
persona2.saludar();