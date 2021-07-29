/******************************************************************************
Autor: Vazquez Alejandro
Enunciado: al presionar el botón pedir la CLAVE (ayuda: es utn750)
 *****************************************************************************/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada!="utn750"){
		alert("ayuda: es utn750");
		claveIngresada = prompt("ingrese nuevamente el número clave.");
	}
	
}//FIN DE LA FUNCIÓN
