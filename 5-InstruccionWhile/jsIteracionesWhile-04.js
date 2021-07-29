/******************************************************************************
Autor: Vazquez Alejandro
Enunciado: al presionar el botón pedir un número entre 0 y 9 inclusive.
 *****************************************************************************/

function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while(numeroIngresado >= 0 && numeroIngresado < 10){
		alert("Su numero es: " + numeroIngresado)
		numeroIngresado = prompt("ingrese otro número entre 0 y 9.");
	}
	alert("Ese numero no esta entre el 0 y 9.")
	
}//FIN DE LA FUNCIÓN