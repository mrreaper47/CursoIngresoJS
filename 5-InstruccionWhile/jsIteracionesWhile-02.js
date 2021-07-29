/******************************************************************************
Autor: Vazquez Alejandro
Enunciado: al presionar el botón mostrar 10 repeticiones con números DESCENDENTES, desde el 10 al 1.
*******************************************************************************/
function mostrar()
{
	var contadorDeVueltas;

	contadorDeVueltas=11;
	while(contadorDeVueltas>1)
	{
		contadorDeVueltas=contadorDeVueltas-1;
		alert("Esta es la vuelta numero: " + contadorDeVueltas)
	}
}