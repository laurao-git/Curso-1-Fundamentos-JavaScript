// Async and await.

// Las promesas existieron después de los Callbacks.

// Genera que se vuelva código Síncrono a Asíncrono en el Call Stack y se resuelvan diferentes tareas.

// fetch() es un web API que regresa una promesas.

// function fetchData () {
//     fetch("https://rickandmortyapi.com/api/character")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// }

// Async Await tiene Try y Catch. -----> Permiten el manejo de los errores desde el Async y Await.
// El Try es el código que tiene que pasar y si eso no funciona, el Catch regresa el error.

// async function fetchData() {
//     try {

//         let response = await fetch("https://rickandmortyapi.com/api/character")
//         let data = await response.json()
//         console.log(data)
//     }catch (error) {
//         console.log(error);

//     }
// }


// For await for -----> Bucle con async await para pasar peticiones de forma asíncrona, para que las peticiones se terminen de resolver, reresen al callstack y obtener respuesta de esos datos.

const urls = ["https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode",
];

async function fetchNewData () {
    try {
        for await (let url of urls) {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
        } 
    } catch (error) {
    console.log(error)
}

}