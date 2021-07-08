//   const precioOriginal = 120;
//   const descuento = 18;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;
    return precioConDescuento;
}
function calcularPrecioFinal(){
     const inputp = document.getElementById("InputPrice");
     const valuep = inputp.value;
     const inputd = document.getElementById("InputDiscount");
     const valued = inputd.value;
     const precioFinal = calcularPrecioConDescuento(valuep,valued);
  
     const resultp = document.getElementById("ResultPrice");
     resultp.innerText = "El precio con descuento es $" + precioFinal;
}

// console.log({
//      precioOriginal,
//      descuento,
//      porcentajeConDescuento,
//      precioConDescuento,
// });
