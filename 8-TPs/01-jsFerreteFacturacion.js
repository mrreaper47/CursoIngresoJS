/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1;
var precio2;
var precio3;
var precio1_int;
var precio2_int;
var precio3_int;
var operacion;

function Sumar () 
{
	precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1_int = parseFloat(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2_int = parseFloat(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3_int = parseFloat(precio3);
    operacion = (precio1_int + precio2_int + precio3_int).toFixed(2);
    alert("La suma total es: " + operacion);
}
function Promedio () 
{
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1_int = parseFloat(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2_int = parseFloat(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3_int = parseFloat(precio3);
    operacion = ((precio1_int + precio2_int + precio3_int) / 3).toFixed(2);
    alert("El promedio es: " + operacion);
}
function PrecioFinal () 
{
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1_int = parseFloat(precio1);
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2_int = parseFloat(precio2);
    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3_int = parseFloat(precio3);
    operacion = ((precio1_int + precio2_int + precio3_int) * parseFloat(1.21)).toFixed(2);
    alert("El precio final con IVA: " + operacion);
}