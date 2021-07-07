/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var temperatura;
var temperatura_float;
var conversion;

function FahrenheitCentigrados () 
{
	temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura_float = parseFloat(temperatura);
    conversion = ((temperatura_float - 32) / 1.8).toFixed(2);
    alert("La temperatura en centigrados es " + conversion);
}

function CentigradosFahrenheit () 
{
	temperatura = document.getElementById("txtIdTemperatura").value;
	temperatura_float = parseFloat(temperatura);
	conversion = (((temperatura_float * 9) / 5) + 32).toFixed(2);
    alert("La temperatura en centigrados es " + conversion);
}
