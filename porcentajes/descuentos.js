const inputPrice = document.querySelector("#price")
const inputDiscount = document.querySelector("#discount");
const btn = document.querySelector("#calculate");
const pResult = document.querySelector("#result")


btn.addEventListener("click", calcularPrecioDescuento)


function calcularPrecioDescuento() {
    // P * (100 - D) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);
    

    if (!price || !discount ){
        pResult.innerText = "¡CHANCLA! Por favor llena el formulario correctamente."
        return;
    }

    if(discount > 100){
        pResult.innerText = "No hay descuento para este precio."
        return;
    }

    const newPrice = price * (100 - discount) / 100;

    pResult.innerText = "El nuevo Precio con Descuento es " + newPrice;
}



