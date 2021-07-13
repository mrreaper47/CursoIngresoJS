function mostrar() {
    var edad;
    var edad_int;

    edad = document.getElementById("txtIdEdad").value;
    edad_int = parseInt(edad);

    if (edad_int > 17 || edad_int < 13) {
        alert("No eres adolecene.");
    }
}