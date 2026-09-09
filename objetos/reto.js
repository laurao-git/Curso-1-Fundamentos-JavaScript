const usersDatabase = [
    {
        username: "andres",
        password: "123",
    },

    {
        username: "carol",
        password: "456",
    },

    {
        username: "camilo",
        password: "789",
    },
];

const usersTimeline = [
    {
        username: "Estefany",
        timeline: "Me encata JavaScript!",
    },

    {
        username: "Oscar",
        timeline: "Developer es lo mejor",

    },

    {
        username: "Alejandro",
        timeline: "Cállate el hocico",

    },
    
    {
        username: "Andrés",
        timeline: "El aromática es mejor que el café",

    },
];

const username = prompt("¿Cuál es tu usuario?");
const password = prompt("¿Cuál es tu contraseña?");

function usuarioExistente(username, password) {
    for(let i = 0; i < usersDatabase.length; i++) {
        if(
            usersDatabase[i].username === username &&
            usersDatabase[i].password === password
        ) {
            // console.log("Es Correcto.");
            return true;
        } 
    }
    return false;
}

// usuarioExistente(username, password);

function signIn(username, password) {
    if(usuarioExistente(username, password)) {
        alert(`¡Bienvenido a tu cuenta, me alegro que estés aquí ${username}!`);
        console.log(usersTimeline);
    } else {
        alert("¡OOPS! Something wet wrong. Password or Username is incorrect. Try again, babe. 😊");
    }
}
