function mostrar() {
    var edad;
    var edad_int;

    edad = document.getElementById("txtIdEdad").value;
    edad_int = parseInt(edad);

    if (edad_int < 18 && edad_int >= 13) {
        alert("Eres adolecente.");
    } else {
        alert("No eres adolecene.");
    }
}