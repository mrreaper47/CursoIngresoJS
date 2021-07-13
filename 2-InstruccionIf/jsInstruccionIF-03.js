function mostrar() {
	var edad;
	var edad_int;

	edad = document.getElementById("txtIdEdad").value;
	edad_int = parseInt(edad);

	if (edad_int >= 18) {
		alert("Eres mayor de edad.");
	} else {
		alert("Eres menor de edad.");
	}
}