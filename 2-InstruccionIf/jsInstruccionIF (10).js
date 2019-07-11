function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
// en la variable nota voy a guardar el numero aleatorio
	var nota;
//buscar en casa que hace la funcion Math.floor(Math.random()
	nota = Math.floor(Math.random() * 	10 + 1);

	if (nota >= 9)
	{
		alert(" Nota: " + nota + " Exelente");
	}
	else if (nota >4)
	{
		alert (" Nota: " + nota + " Aprobó");
	}
	
	else 
	{
       alert (" Nota: " + nota + " Vamos, la proxima se puede");
	}



}//FIN DE LA FUNCIÓN