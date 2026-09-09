/*
Un Objeto es una Estructura de Datos que ayuda a guardar valores de forma particular.

con Key / Value.

Objeto {
propiedad: valor ,
propiedad: valor,
propiedad: valor

}

Es una estructura de Datos que ayuda a guardar información.

Método: Funciones dentro de Objetos que generen interacción.
*/

const persona = {
    nombre: "John",
    edad: 30,
    genero: "Masculino",
    direccion: {
        calle: "Av. New York City, 803.",
        ciudad: "New York",
        pais: "EE.UU",
    },

    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
}


const gato = {
    nombre: "Kitty Patitas Suaves",
    edad: "5 años",
    sexo: "Hembra",
    enCasoDePerdida: "Collar Rosado con Huella dirección de la casa",
    direccion: {
        tipoVia: "Calle",
        numeroVia: 84,
        letra: "A",
        cuadrante1: "Sur",
        viaTransversal: "2-05",
        cuadrante2: "Este"
    },

    saludar: () => console.log("¡Miau! Mi nombre es " + gato.nombre + "." + "Si por casualidad me pierdo y no sabes a quién pedir ayuda... En mi PLACA está la" + gato.direccion + "de mi Casita. Te lo agradezco mucho si me devuelves a mi dueño. 😸🐾"),
}

gato.saludar();