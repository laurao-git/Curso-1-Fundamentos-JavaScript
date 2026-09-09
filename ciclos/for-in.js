/*

for in -----> iterar en objetos literales.

objetos:
propiedades = valor

array, string 

string:
item

for (variable in objeto){
código
}

*/

const listaDeCompras = {
    manzanas: 5,
    pera: 3,
    naranja: 2,
    uva: 1

}

for (fruta in listaDeCompras){
    console.log(fruta)
}

for (fruta in listaDeCompras){
    console.log(`{fruta} : ${listaDeCompras[fruta]}`)
}
/*

for in: iterar sobre objetos innumerables, no iterables.

los objetos iterables son los arrays y strings.

los objetos innumerables son solo los objetos.

*/

