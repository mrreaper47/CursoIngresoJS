/******************************************************************************
Autor: Vazquez Alejandro
Enunciado: Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*******************************************************************************/

function mostrar() {
    var numero1;
    var numero2;
    var resultado;

    numero1 = prompt("Ingresar un numero.");
    numero2 = prompt("Ingresar otro numero.");

    if (numero1 == numero2) {
        resultado = numero1 + numero2;
    } else {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        if (numero1 > numero2) {
            resultado = numero1 - numero2;
            if (resultado > 10) {
                resultado=("la resta es " + resultado + " y superó el 10");
            }
        } else {
            resultado = numero1 + numero2;
        }
    }
    alert(resultado);
}
