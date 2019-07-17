function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

while ( numero >=10 || numero <=1 )
{ 
 alert("Dato Invalido");
numero =parseInt(prompt("Reingrese número"));
 

}
alert("Dato Valido")
document.getElementById("Numero").Value = numero;
}//FIN DE LA FUNCIÓN