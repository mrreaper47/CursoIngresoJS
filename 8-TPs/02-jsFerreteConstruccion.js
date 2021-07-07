/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var largo_int;
    var ancho_int;
    var calculo;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    largo_int = parseFloat(largo);
    ancho_int = parseFloat(ancho);
    calculo = ((2 * (largo_int + ancho_int)) * 3).toFixed(2);
    alert("Los metros de alambre necesarios son: " + calculo);
}
function Circulo () 
{
    var radio;
    var radio_int;
    var calculo;

    radio = document.getElementById("txtIdRadio").value;
    radio_int = parseFloat(radio);
    calculo = (((2 * 3.14) * radio_int) * 3).toFixed(2);
    alert("Los metros de alambre necesarios son: " + calculo);
}
function Materiales () 
{
    var largo;
    var ancho;
    var largo_int;
    var ancho_int;
    var cemento;
    var cal;
    var area;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    largo_int = parseFloat(largo);
    ancho_int = parseFloat(ancho);
    area = (largo_int * ancho_int).toFixed(2);
    cemento = Math.round(2 * area);
    cal = Math.round(3 * area);
    alert("La cantidad de cemento es " + cemento + " bolsas y de cal " + cal + " bolsas");

}