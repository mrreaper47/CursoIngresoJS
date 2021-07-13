function mostrar() {
    var edad;
    var edad_int;

    edad = document.getElementById("txtIdEdad").value;
    edad_int = parseInt(edad);

    if (edad_int == 15) {
        alert("Niña bonita.");
    }
}