/******************************************************************************
Autor: Vazquez Alejandro
Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
******************************************************************************/

function mostrar()
{
	var destinoIngresado;
	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch (destinoIngresado){
		case "Bariloche":
			alert("Se encuentra en el Oeste.");
			break;
		case "Cataratas":
			alert("Se encuentra en el Norte.");
			break;
		case "Mar del plata":
			alert("Se encuentra en el Este.");
			break;
		case "Ushuaia":
			alert("Se encuentra en el Sur.");
			break;
	}
}//FIN DE LA FUNCIÓN