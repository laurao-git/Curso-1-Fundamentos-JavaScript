const PlatziMath = {};

//Dentro de los objetos se pueden guardar funciones.

PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
}

PlatziMath.esImpar = function esImpar(lista){
    return lista.length % 2;
}

PlatziMath.calcularModa = function calcularModa(lista){
    const listaCount  = {};

    for(let i = 0; i < lista.length; i++){
        const elemento = lista[i];

        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
    }

   } 
   const listaArray = Object.entries(listaCount)
   const listaOrdenada = PlatziMath.ordenarListaBidimensional(listaArray, 1);
   const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];

   const moda = listaMaxNumber[0];
   //console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});
   // console.log("La moda es " + listaMaxNumber[0]);
   return moda;

}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada){

    // Ahora sí está definida más abajo.
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista)


    if (listaEsPar){
        // const indexMitad1ListaPar = (lista.length / 2) - 1;
        // const indexMitad2ListaPar = lista.length / 2;

       const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;
      

    // lista[indexMitad1ListaPar]
    // lista[indexMitad2ListaPar]
    // [lista[indexMitad1ListaPar], lista[indexMitad2ListaPar]]

    const listaMitades = [];
    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);

    // ====================== MÉTODO MATH.FLOOR ======================
    const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
    return medianaListaPar;


    } else{
        // la mediana de 5 elementos está en el índice 2, no el 3.
        const indexMitadListaImpar = Math.floor(lista.length / 2);

        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;

    }

}

// ====================== MÉTODO .REDUCE ======================
PlatziMath.calcularPromedio = function calcularPromedio(lista){
    function sumarTodosElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio
}

//Método floor() ----> Redondea los números.


    // numero / 2 
    // (numero % 2) //el % en JS significa módulo = residuo de una división.
    // true : false

    //length = cantidad de elementos de la lista.

//     if(lista.length){
//         return false;
//     }else {
//         return true;
//     }

//     return !(lista.length % 2);

// los condicionales de JavaScript lo interpretan como false.



// LISTA BIDIMENSIONAL CON MÉTODO SORT. (UN ARRRAY DENTRO DE OTRO ARRAY Y ESE ARRAY DENTRO DE OTRO ARRAY).
PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i){
    function ordenarListaSort(valorAcumulado, nuevoValor){

        return valorAcumulado[i] - nuevoValor[i];


        // if(valoracumulado > nuevoValor){
        //     return 1;

        // }else if (valoracumulado == nuevoValor){
        //     return 0;
            
        // } else if(valoracumulado < nuevoValor){
        //     return -1;
        // }

        // return nuevoValor - valorAcumulado;
        // return 5 - 10 -> -5;
        // return 5 -  ​5 ->  ​0;
        // return 10 -  ​5 ->  ​5;

    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    // const lista = listaDesordenada.sort((a, b) => a - b);

    return lista;
}

// Ordena una lista simple de números de menor a mayor.
PlatziMath.ordenarLista = function ordenarLista(listaDesordenada){
    return listaDesordenada.sort((a, b) =>a - b);
}
