function calcularDescuentoPrecio (price, descuentoPorcentaje){
    const discount = (price * descuentoPorcentaje) / 100
    const precioconDescuento = price - discount

    return precioconDescuento
}

const originalPrecio = 100.000
const descuentoPorcentaje = 20
const finalPrecio = calcularDescuentoPrecio(originalPrecio, descuentoPorcentaje)

console.log("Original Precio: $" + originalPrecio)
console.log("Descuento: " + descuentoPorcentaje + "%")
console.log("Precio con Descuento: $" + finalPrecio)