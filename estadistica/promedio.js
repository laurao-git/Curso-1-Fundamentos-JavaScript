//[1, 2, 3, 4]
function calcularPromedio (lista){
    // Sumar todos los elementos / Cantidad de Elementos.

// let sumaLista = 0;

//     for (let i = 0; i < list.length; i++){
//         sumaLista = sumaLista + lista[i]
//     }

    //lista.length

    // function sumarTodosElementos(valorAcumulado, nuevoValor) {
    //     return valorAcumulado + nuevoValor;
    // }

    const sumaLista = lista.reduce(sumarTodosElementos);

     // ARRAY FUNCTION: const ejemplo = (a, b) => a + b;

    // array function: () => {}
        // () paréntesis para recibir parámetros de una función.

        //Diferente forma de hacer el mismo código pero de diferente manera.
    //const sumaLista = lista.reduce(function (){});

    //ARRAY FUNCTION:
    // const sumaLista = lista.reduce((a, b) => a + b );


    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}