function mostrar()
{
    var numero;
	var contador=0;
	var acumulador=0;
	var respuesta='s';

	while ( respuesta == 's' ){

		
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador++;
        respuesta = prompt("¿Quiere seguir ingresando numeros?");


	    
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN