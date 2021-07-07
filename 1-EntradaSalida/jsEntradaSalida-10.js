/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var importe_int;
	var resultado;
	var imprimir;

	var importe = document.getElementById("txtIdImporte").value;
    var importe_int = parseInt(importe);
	var resultado = importe_int * 0.75;
    var imprimir = document.getElementById("txtIdResultado").value=resultado;
}
