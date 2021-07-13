function mostrar() {
	var edad;
	var edad_int;
	var estado_civil;

	edad = document.getElementById("txtIdEdad").value;
	estado_civil = document.getElementById("estadoCivil").value;
	edad_int = parseInt(edad);

	if (edad_int >= 18 && estado_civil == "Soltero") {
		alert("Es soltero y no es menor.")
	}
}