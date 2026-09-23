

const inputPrice = document.querySelector("#price")
const inputCoupon = document.querySelector("#coupon");
const btn = document.querySelector("#calculate");
const pResult = document.querySelector("#result")


btn.addEventListener("click", calcularPrecioDescuento)


// const arrayObjeto = undefined; // ["cupones": descuento] {}?

// const couponObj = {
//     "coupon123": 30,
//     "12345": 25,
//     "123": 15,
// };


const couponArray = [];
couponArray.push({
    name: "cupon123",
    discount: 30,
});

couponArray.push({
    name: "cupon555",
    discount: 25,
});

couponArray.push({
    name: "123",
    discount: 15,
});



function calcularPrecioDescuento() {
    // P * (100 - D) / 
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    // CONDICIONAL IF para cupones de descuento.
    // if (!price || !coupon ){
    //     pResult.innerText = "¡CHANCLA! Por favor llena el formulario correctamente."
    //     return;
    // }

    
    let discount;

    // Entrar a los Métodos de los Arrays con punto.
    // couponArray.filter(function () {
    //     // return.
    // });

    function patito(couponElement) {
        return couponElement.name == coupon;
    }

    const coupontInArray = couponArray.filter(patito); // {name, discount}
    const couponInArray = couponArray.find(patito)


    if (coupontInArray.length > 0) {
        discount = coupontInArray[0].discount;

    }else {
        // No es válido.
        pResult.innerText = "El cupón no es VÁLIDO.";
        return;
    }

    console.log({
        coupon, 
        discount, 
        coupontInArray,
        couponArray
    })


    // CONDICIONAL CON OBJETOS.
    // if (couponObj [coupon]) {
    //     discount = couponObj[coupon];
    // }else {
    //     pResult.innerText = "El cupón no es VÁLIDO.";
    //     return;

    // }


    
    // CONDICIONAL para cupones de descuento.
    // switch (coupon) {
    //     case "cupon123":
    //         discount = 30;
            
    //         break;

    //     case "cupon555":
    //         discount = 25;
    //         break;
    
    //     default:
    //         pResult.innerText = "El cupón no es VÁLIDO."
    //         return;
    // }



    // CONDICIONAL para Descuento de precio.
    // if(coupon == "cupon123") {
    //     discount = 30;

    // } else if (coupon == "coupon555") {
    //     discount = 25;

    // } else {
    //     pResult.innerText = "El cupón no es VÁLIDO."
    //     return;
    // }


    // if (!price || !discount ){
    //     pResult.innerText = "¡CHANCLA! Por favor llena el formulario correctamente."
    //     return;
    // }

    const newPrice = price * (100 - discount) / 100;

    pResult.innerText = "El nuevo Precio con Descuento es " + newPrice;
}



