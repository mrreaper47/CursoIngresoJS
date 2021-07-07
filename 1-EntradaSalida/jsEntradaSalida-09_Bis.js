/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
*/
/*
Se creo un nuevo HTML (EntradaSalida-09_Bis.html)
apuntado a un nuevo JS (jsEntradaSalida-09_Bis.js)
Se modifico en el HTML solo la ruta del Js. No se modifico otro contenido del HTML.
*/
function mostrarAumento()
{
	var sueldo;
	var mensaje_sueldo;
	var sueldo_int;
    var aumento;
    var mensaje_aumento;
    var aumento_int;
    var resultado;

	sueldo = prompt("Ingresa su sueldo sin decimales");
	mensaje_sueldo = "Mi sueldo es: " + sueldo;
	sueldo_int = parseInt(sueldo);
	document.getElementById('txtIdSueldo').value=mensaje_sueldo;
	aumento = prompt("Ingresa el porcentaje sin decimales, ni simbolos");
	mensaje_aumento = "El aumento es: " + aumento + "%";
	aumento_int = parseInt(aumento);
	document.getElementById('txtIdResultado').value=mensaje_aumento;
	resultado = ((sueldo_int * aumento_int / 100) + sueldo_int);
	alert("Tu sueldo con aumento es: " + resultado);
}