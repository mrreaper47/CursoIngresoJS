function mostrar()
{
    var base;
    var altura;
    var calculo;
    var base_int;
    var altura_int;

    base=prompt("Por favor ingresa la base del rectangulo.");
    altura=prompt("Por favor ingresa la altura del rectangulo.");
    base_int=parseFloat(base);
    altura_int=parseFloat(altura);
    calculo=(base_int * altura_int).toFixed(2);
    alert("El perimetro del rectangulo es: " + calculo);
}

