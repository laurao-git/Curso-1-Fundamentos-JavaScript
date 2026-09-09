/*

Estructura de Datos.

key / value.

objeto {
propiedad: valor,
propiedad: valor,
propiedad: valor

metodos()
}

*/

const persona = {
    nombre: "John",
    edad: 30,
    direccion: {
        calle: "Av. Strunfield 187",
        ciudad: "Garage",
    },
    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    },
};

console.log(persona);
persona.saludar()


persona.telefono = "555-555-555";
console.log(persona.telefono);

persona.despedir = () =>{
    console.log("Adiós");
};

persona.despedir();

// Borrar propiedades y métodos.

delete persona.telefono;

delete persona.despedir;