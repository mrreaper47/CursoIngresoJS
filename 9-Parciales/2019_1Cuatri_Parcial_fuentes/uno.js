function mostrar()
{
    var base;
    var altura;
    var calculo;
    var base_int;
    var altura_int;

    base=prompt("Por favor ingresa la base del triangulo.");
    altura=prompt("Por favor ingresa la altura del triangulo.");
    base_int=parseFloat(base);
    altura_int=parseFloat(altura);
    calculo=((base_int * altura_int) / 2).toFixed(2);
    alert("El perimetro del triangulo es: " + calculo);
}