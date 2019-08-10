function mostrar()
{
 var localidad;
 var cantidadHabitantes;
 var temperatura;
 var respuesta = "s";
 var contadorpares=0;
 var banderaMenosHabitantes =false;
 var localidadMenosHabitantes;
 var contadorTemperaturasAltas=0;
 var menor;
 var contador =0;
 var minimoTemperatura;
 var nombreMinimoTemperatura;


 localidad = prompt("ingrese localidad");

while(respuesta == "s"){


 do {
	 cantidadhabitantes= prompt("ingrese cantidad entre 1 y 40");

 }while (isNaN(cantidadhabitantes) || cantidadhabitantes <1 || cantidadhabitantes >40)

cantidadHabitantes=parseInt(cantidadHabitantes);

do {
	temperatura = prompt ("ingrese cantidad entre -50 y 50");
} while(isNaN(temperatura) || temperatura <-50 || temperatura >50);

respuesta = prompt ("ingrese `s´ para continuar");
{
if (temperatura != 0 && temperatura%2==0)

	 contadorpares++;

}


	if (banderaMenosHabitantes || cantidadHabitantes < menor){

		menor = cantidadhabitantes;
		localidadMenosHabitantes= localidad;
		banderaMenosHabitantes=false;
	}

	if(temperatura>40)
	{

	contadorTemperaturasAltas++;
	}

      acumuladorHabitantes = acumuladorHabitantes + cantidadhabitantes;
      contador ++;

      if (contador==0 || temperatura < minimoTemperatura)
    {
	  minimoTemperatura = temperatura;
	  nombreMinimoTemperatura = localidad;
    }
 

 document.write( "La cantidad de temperaturas pares:" + temperatura + "<br>");
 document.write ("El nombre de la localidad con menos habitantes"  + localidadMenosHabitantes + "<br>");
 document.write ("La cantidad localidades que superan los 40 grados de temperatura" + "<br>");
 document.write (" El promedio de habitantes entre las localidades ingresadas" + "<br");
 document.write("La temperatura mínima ingresada, y nombre de la localidad que registro esa temperatura");
}
}