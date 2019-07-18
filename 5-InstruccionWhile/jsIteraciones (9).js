function mostrar()
{
	var numero;
	var maximo;
	var minimo;
	var flag=0;
	var respuesta='s';

do { numero = parseInt(prompt("Ingrese numero"));

   if ( numero > maximo || flag == 0) {

   maximo = numero;   
   }


   if ( numero < minimo || flag == 0){

   minimo = numero; 
   flag = 1;   }

respuesta = prompt("quiere seguir ingresando numeros");


	   }	while(respuesta =='s');
	   
	   document.getElementById("maximo").value= maximo;
	   document.getElementById("minimo").value= minimo;


		
	





}//FIN DE LA FUNCIÓN