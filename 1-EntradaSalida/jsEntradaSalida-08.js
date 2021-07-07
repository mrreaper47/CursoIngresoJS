/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero1;
	var numero2;
	var numero1_int;
	var numero2_int;
	var resultado;


	var numero1 = document.getElementById("txtIdNumeroDividendo").value;
	var numero2 = document.getElementById("txtIdNumeroDivisor").value;
    var numero1_int = parseInt(numero1);
	var numero2_int = parseInt(numero2);
	var resultado = numero1_int % numero2_int;

	alert("El resto es " + resultado);
}
