function mostrar()
{
    var precio;
    var descuento;
    var calculo;
    var precio_int;
    var descuento_int;

    precio=prompt("Por favor ingresa el precio.");
    descuento=prompt("Por favor ingresa el descuento.");
    precio_int=parseFloat(precio);
    descuento_int=parseFloat(descuento);
    calculo=(precio_int-(precio_int * descuento_int / 100)).toFixed(2);
    document.getElementById("elPrecioFinal").value=calculo;
}
