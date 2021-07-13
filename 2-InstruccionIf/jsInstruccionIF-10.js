function mostrar()
{
	var numero_random;
	numero_random=Math.floor(Math.random() * 10) + 1;
	if(numero_random == 9 || numero_random == 10){
		alert("EXCELENTE");
	} else if(numero_random >= 4){
		alert("APROBÓ");
	} else{
		alert("Vamos, la proxima se puede");
}
}