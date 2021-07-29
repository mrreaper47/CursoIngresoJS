/******************************************************************************
Autor: Vazquez Alejandro
Enunciado: al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
*******************************************************************************/
function mostrar()
{
	var contadorDeVueltas;

	contadorDeVueltas=0;
	while(contadorDeVueltas<10)
	{
		contadorDeVueltas=contadorDeVueltas+1;
		alert("Esta es la vuelta numero: " + contadorDeVueltas)
	}
}