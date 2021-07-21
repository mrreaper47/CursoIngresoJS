/******************************************************************************
Autor: Vazquez Alejandro
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche
******************************************************************************/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;

	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destinoIngresado=document.getElementById("txtIdDestino").value;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
			}
			break;
		case "Otoño":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					alert("Se viaja");
					break;
			}
			break;
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
					break;
			}
	}
}//FIN DE LA FUNCIÓN