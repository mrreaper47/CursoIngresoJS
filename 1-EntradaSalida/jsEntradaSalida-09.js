/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var sueldo_int;
	var resultado;
	var imprimir;

	var sueldo = document.getElementById("txtIdSueldo").value;
    var sueldo_int = parseInt(sueldo);
	var resultado = sueldo_int * 1.10;
    var imprimir = document.getElementById("txtIdResultado").value=resultado;
}
