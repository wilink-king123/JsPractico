// const coupons = [
//     "JuanDC_es_Batman",
//     "pero_no_le_digas_a_nadie",
//     "es_un_secreto",
// ];

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function calcularPrecioConDescuento(precio,descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;
    return precioConDescuento;
}


function calcularPrecioFinal(){
    const inputp = document.getElementById("InputPrice");
    const valuep = inputp.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    
    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + userCouponValue + "no es válido");
    }
    
    if (!userCoupon) {
        alert("El cupón " + userCouponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(valuep, descuento);
    
        const resultP = document.getElementById("ResultPrice");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}    

    
    
    // switch(couponValue){
    //     case "JuanDC_es_Batman":
    //         descuento = 15;
    //         break;
    //     case "pero_no_le_digas_a_nadie":
    //         descuento = 30;
    //         break;
    //     case "es_un_secreto":
    //         descuento = 45;
    //         break;        
    //     default:
    //         alert("Cupon no valido");
    //         break;
    // }

///////////////////////////////////////////////////////////////////////////

//     if (!coupons.includes(couponValue)) {
//         alert("El cupón " + couponValue + " no es válido");
//      } else if (couponValue === "JuanDC_es_Batman") {
//         descuento = 15;
//      } else if (couponValue === "pero_no_le_digas_a_nadie") {
//         descuento = 30;
//      } else if (couponValue === "es_un_secreto") {
//         descuento = 25;
//      }

//     const precioFinal = calcularPrecioConDescuento(valuep,descuento);
  
//     const resultp = document.getElementById("ResultPrice");
//     resultp.innerText = "El precio con descuento es $" + precioFinal;
// }