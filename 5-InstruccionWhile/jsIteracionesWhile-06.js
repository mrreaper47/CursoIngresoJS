/******************************************************************************
Autor: Vazquez Alejandro
Enunciado: Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*******************************************************************************/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var numero1;

	contador=0;
	acumulador=0;

	while(contador<5){
		numero1=prompt("Dame un numero:")
		contador=contador+1
	}
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;

}//FIN DE LA FUNCIÓN