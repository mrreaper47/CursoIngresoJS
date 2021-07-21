/******************************************************************************
Autor: Vazquez Alejandro
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
******************************************************************************/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var porcentaje;
	var tarifaBase;
	var precioBruto;
	var precioFinal;

	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destinoIngresado=document.getElementById("txtIdDestino").value;
	tarifaBase=15000;
	porcentaje=0;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Cordoba":
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = -10;
					break;
			}
	}
	precioBruto=(tarifaBase*porcentaje/100)
	precioFinal=(tarifaBase-precioBruto)
	alert(precioFinal);

}//FIN DE LA FUNCIÓN