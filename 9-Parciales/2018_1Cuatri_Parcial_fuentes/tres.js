function mostrar()
{
    var precio;
    var descuento;
    var precio_float;
    var descuento_float;
    var calculo;

    precio=prompt("Por favor, ingrese el precio:");
    descuento=prompt("Por favor, ingrese el porcentaje de descuento:");
    precio_float=parseFloat(precio);
    descuento_float=parseFloat(descuento);
    calculo=(precio_float - (precio_float * descuento_float / 100)).toFixed(2);
    document.getElementById("elPrecioFinal").value=calculo;
}
