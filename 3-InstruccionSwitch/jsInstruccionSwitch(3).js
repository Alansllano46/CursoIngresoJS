function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes) {
    case "Febrero":
        alert ("ESte mes no tiene mas de 29 dias");
        break;

     default:
         alert ("Este mes tiene 30 dias o mas");   
}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN