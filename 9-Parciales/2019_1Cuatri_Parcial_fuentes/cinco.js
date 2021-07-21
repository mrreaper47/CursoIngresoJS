/******************************************************************************
Autor: Vazquez Alejandro
Enunciado: Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
*******************************************************************************/

function mostrar()
{
    var dias;
    var continente;
    var metodoPago;
    var descuento;
    var precio;
    var precioBruto;
    var precioFinal;

    continente=document.getElementById("Marca").value;
    dias=prompt("¿Cantidad de dias de estadia?")
    metodoPago=prompt("¿Cual es el metodo de pago (debito, mercadopago, efectivo)?")
    precio=100;


    switch (continente) {
        case "América":
            descuento = 50;
            switch (metodoPago) {
                case "debito":
                    descuento = descuento + 10;
                    break;
            }
            break;
        case "África":
            descuento = 60;
            switch (metodoPago) {
                case "mercadopago":
                case "efectivo":
                    descuento = descuento + 15;
                    break;
            }
            break;
        case "Europa":
            descuento = 20;
            switch (metodoPago) {
                case "debito":
                    descuento = descuento + 15;
                    break;
                case "mercadopago":
                    descuento = descuento + 10;
                    break;
                default:
                    descuento = descuento + 5;
            }
            break;
        default:
            descuento = -20;
            break;
    }
    precioBruto=(dias*precio);
    descuento=(precioBruto*descuento/100);
    precioFinal=(precioBruto-descuento);
    alert("El costo del viaje sera: " + precioFinal);
}
