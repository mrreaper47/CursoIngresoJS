/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var numero1;
var numero2;
var numero1_int;
var numero2_int;
var resultado;

function sumar()
{
	var numero1 = document.getElementById("txtIdNumeroUno").value;
	var numero2 = document.getElementById("txtIdNumeroDos").value;
    var numero1_int = parseInt(numero1);
	var numero2_int = parseInt(numero2);
	var resultado = numero1_int + numero2_int;

	alert("la suma es " + resultado);
}

function restar()
{
	var numero1 = document.getElementById("txtIdNumeroUno").value;
	var numero2 = document.getElementById("txtIdNumeroDos").value;
    var numero1_int = parseInt(numero1);
	var numero2_int = parseInt(numero2);
	var resultado = numero1_int - numero2_int;

	alert("la resta es " + resultado);
}

function multiplicar()
{
	var numero1 = document.getElementById("txtIdNumeroUno").value;
	var numero2 = document.getElementById("txtIdNumeroDos").value;
    var numero1_int = parseInt(numero1);
	var numero2_int = parseInt(numero2);
	var resultado = numero1_int * numero2_int;

	alert("la multiplicacion es " + resultado);
}

function dividir()
{
	var numero1 = document.getElementById("txtIdNumeroUno").value;
	var numero2 = document.getElementById("txtIdNumeroDos").value;
    var numero1_int = parseInt(numero1);
	var numero2_int = parseInt(numero2);
	var resultado = numero1_int / numero2_int;

	alert("la divicion es " + resultado);
}


