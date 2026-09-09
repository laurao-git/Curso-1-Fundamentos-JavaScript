// switch(expresion) {
//     case valor1:
//         // código a ejecutar.
//         break;
//     case valor2:
//         // código a ejecutar.
//         break;
//     case valor1:
//         // código a ejecutar.
//         break;
//     case valor2:
//         // código a ejecutar.
//         break;
//     default:
// }


let expr = "Plátanos"

switch(expr){ // ===
    case "Naranjas":
        console.log("Las Naranjas cuesstan $20 Pesos el Kilo")
        break;
        case "Manzanas":
            console.log("Las Manzanas cuestan $43 el Kilo")
            break;
            case "Plátanos":
                console.log("El Plátano está en $30 el Kilo")
                break;
                case "Mangos":
                case "Papayas":
                console.log("Los Mangos y las Papayas cuestan $25 Pesos el Kilo")  
                break;
                default:
                console.log(`Lo siento, no contamos con ${expr}`)
}

console.log("¿Hay algo más que desees?")