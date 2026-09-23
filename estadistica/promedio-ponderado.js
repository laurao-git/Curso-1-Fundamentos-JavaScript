const notas = [
    {
        course: "Artes",
        note: 10,
        credit: 5,
    },

    {
        course: "Programación",
        note: 8,
        credit: 5,
    },

    {
        course: "Inglés",
        note: 10,
        credit: 5,
    },
];

const notasConCredito = notas.map(function (notaObject){
    return notaObject.nota * notaObject.credit;
});


const sumaDeNotasConCredito = notasConCredito.reduce(
    function (suma = 0, nuevoValor){
        return suma + nuevoValor
    }
)


const creditos = notas.map(function (notaObject){
    return notaObject.credit;
});

const sumaDeCreditos = creditos.reduce(
    function (suma = nuevoValor){
        return suma + nuevoValor;
    }
);



const promedioPonderadoNotasConCreditos = sumaDeNotasConCredito / sumaDeCreditos;

