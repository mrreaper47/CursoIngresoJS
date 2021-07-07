/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*
Se creo un nuevo HTML (EntradaSalida-09_Bis.html)
apuntado a un nuevo JS (jsEntradaSalida-09_Bis.js)
Se modifico en el HTML solo la ruta del Js. No se modifico otro contenido del HTML.
*/
function mostrarAumento()
{
	var importe;
	var mensaje_importe;
	var importe_int;
    var descuento;
    var mensaje_descuento;
    var descuento_int;
    var resultado;
    
	importe = prompt("Ingresa su importe sin decimales");
	mensaje_importe = "Mi importe es: " + importe;
	importe_int = parseInt(importe)
	document.getElementById('txtIdImporte').value=mensaje_importe;
	descuento = prompt("Ingresa el porcentaje sin decimales, ni simbolos");
	mensaje_descuento = "El descuento es: " + descuento + "%";
	descuento_int = parseInt(descuento)
	document.getElementById('txtIdResultado').value=mensaje_descuento;
	resultado = (importe - (importe_int * descuento_int / 100))
	alert("Tu importe con descuento es: " + resultado)
}