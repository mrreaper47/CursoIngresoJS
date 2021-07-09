function mostrar()
{
    var nombre1;
    var nombre2;
    var peso1;
    var peso2;
    var peso1_int;
    var peso2_int;
    var suma;
    var promedio;

    nombre1=prompt("Por favor ingresa el primer nombre.");
    nombre2=prompt("Por favor ingresa el segundo nombre.");
    peso1=prompt("Por favor ingresa el peso de la primera persona.");
    peso2=prompt("Por favor ingresa el peso de la segunda persona.");
    peso1_int=parseFloat(peso1);
    peso2_int=parseFloat(peso2);
    suma=(peso1_int + peso2_int).toFixed(2);
    promedio=(suma / 2).toFixed(2);
    alert("ustedes se llaman " + nombre1 + " y " + nombre2 + " pesan " + peso1  + " y " + peso2 + " kilos, que sumados son " + suma + " kilos y el promedio de peso " + promedio);
}
