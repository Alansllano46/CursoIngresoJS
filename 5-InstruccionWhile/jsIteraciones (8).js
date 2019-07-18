function mostrar()
{

	var numero;
	var positivo=0;
	var negativo=1;
	var respuesta='s';
	var flag= 0;

 do {
	numero= parseInt(prompt("Ingrese un numero"));

	if ( numero < 0 )
	{
		negativo*= numero;
		flag =0;
		
	

	}
	else if ( numero > 0 )
	{
		positivo += numero;
		flag= 0;
	
		
	}
	while (respuesta == 's'); {

		numero = parseInt(prompt("Ingrese un numero"));
		respuesta = prompt("¿quiere seguir ingresando numeros?");
	}





 document.getElementById('suma').value=positivo;
 document.getElementById('producto').value=negativo;

}
