/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var cantidad;
    var precio;
    var precioBruto;
    var porcentaje;
    var precioFinal;
    var marca;
    var IIBB;

    precio = 35;
    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    cantidad = parseInt(cantidad);
    precioBruto=(precio*cantidad);
    porcentaje=0;

    if (cantidad >= 6) {
        porcentaje = 50;
    } else {
        if (cantidad == 5) {
            if (marca == "ArgentinaLuz") {
                porcentaje = 40;
            } else {
                porcentaje = 30;
            }
        } else {
            if (cantidad == 4) {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                    porcentaje = 25;
                } else {
                    porcentaje = 20;
                }
            } else {
                if (cantidad == 3) {
                    if (marca == "ArgentinaLuz") {
                        porcentaje = 15;
                    } else {
                        if (marca == "FelipeLamparas") {
                            porcentaje = 10;
                        } else {
                            porcentaje = 5;
                        }
                    }
                }
            }
        }
    }
    porcentaje=(precioBruto*porcentaje/100);
    precioFinal=(precioBruto-porcentaje);
    if (porcentaje > 120) {
        IIBB=(precioFinal*0.10)
        alert("IIBB Usted pago " + IIBB.toFixed(2));
        document.getElementById("txtIdprecioDescuento").value = precioFinal+IIBB;
    }
    else{
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
}
