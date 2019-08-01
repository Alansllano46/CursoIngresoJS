function mostrar()
{

	var numero;
	var seguir;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var diferencia;


	do {

		numero = parseInt(prompt("Ingrese un numero: "));

		if (numero > 0) {
			// positivos
			acumuladorPositivos = acumuladorPositivos + numero;
			contadorPositivos++;
		}
		else if (numero < 0) {
			// negativos
			acumuladorNegativos = acumuladorNegativos + numero;
			contadorNegativos++;
		}
		else {
			// ceros
			contadorCeros++;
		}

		if (numero % 2 == 0) {
			contadorPares++;
		}


		seguir = prompt("Quiere continuar?");
	} while (seguir == 's');


	if( contadorPositivos != 0){
	promedioPositivos = acumuladorPositivos / contadorPositivos;
	}

	if( contadorNegativos != 0){		
	promedioNegativos = acumuladorNegativos / contadorNegativos;
	}

	diferencia = contadorPositivos - contadorNegativos;

	document.write("1-Suma de los negativos:" + acumuladorNegativos + "<br>");
	document.write("2-Suma de los positivos:" + acumuladorPositivos + "<br>");
	document.write("3-Cantidad de positivos:" + contadorPositivos + "<br>");
	document.write("4-Cantidad de negativos:" + contadorNegativos + "<br>");
	document.write("5-Cantidad de ceros:" + contadorCeros + "<br>");
	document.write("6-Cantidad de números pares:" + contadorPares + "<br>");
	document.write("7-Promedio de positivos:" + promedioPositivos + "<br>");
	document.write("8-Promedios de negativos:" + promedioNegativos + "<br>");
	document.write("9-Diferencia entre positivos y negativos:" + diferencia + "<br>");



}//FIN DE LA FUNCIÓN