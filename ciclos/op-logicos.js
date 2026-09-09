/*

Operadores Lógicos

*/

// && : si este valor y este valor, pasa esto.
// || : si este valor o este valor, pasa esto. si valor A y valor B se cumplen, podemos continuar.
// ! : valor de negación. 

const a = 10;
const b = 20;
const c = "10"

a == b && a === c
// false

a != b || a == c
// true

!(a === c)
// true