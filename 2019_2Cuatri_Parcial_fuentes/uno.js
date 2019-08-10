
function mostrar()
{
	var ladoA;
	var ladoB;
	var ladoC;
	var mensaje;

	ladoA = prompt("inrese el primer lado:");
	ladoB = prompt("ingrese el segundo lado:");
	ladoC = prompt("inrese el tercer lado:");

	// verifico si es escaleno

	if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC)

	mensaje = "Es escaleno. lados concatenados:" + ladoA + ladoB + ladoC;


	else if ( ladoA == ladoB && ladoA == ladoC ){

	ladoA = parseInt(ladoA);
	ladoB = parseInt(ladoB);
	ladoC = parseInt(ladoC);

	mensaje = "Es equilatero. Perimetro " + (ladoA + ladoB + ladoC);}


	else { 
		mensaje = "No es escaleno ni equilatero";

		}
		alert (mensaje);


	
}

