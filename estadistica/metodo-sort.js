

function calcularMediana(listaDesordenada){
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista)
}







function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulado, nuevoValor){

        // if(valoracumulado > nuevoValor){
        //     return 1;

        // }else if (valoracumulado == nuevoValor){
        //     return 0;
            
        // } else if(valoracumulado < nuevoValor){
        //     return -1;
        // }

        return valorAcumulado - nuevoValor;
        // return nuevoValor - valorAcumulado;
        // return 5 - 10 -> -5;
        // return 5 - 5 -> 0;
        // return 10 - 5 -> 5;

    }

    //const lista = listaDesordenada.sort(ordenarListaSort);
    const lista = listaDesordenada.sort((a, b) => a - b);

    return lista;
}