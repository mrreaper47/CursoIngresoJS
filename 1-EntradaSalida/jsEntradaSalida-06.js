/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
    var suma;

	var numero1 = document.getElementById("txtIdNumeroUno").value;
	var numero2 = document.getElementById("txtIdNumeroDos").value;
    var numero1 = parseInt(numero1);
	var numero2 = parseInt(numero2);
	var suma = numero1 + numero2;

	alert("la suma es " + suma);
}

