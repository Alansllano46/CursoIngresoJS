function mostrar()
{
//tomo la edad  

var edad;

edad =parseInt(document.getElementById("edad").value);


    
if (edad >= 18) { 
    alert ("Usted es adulto");
}

else

if (edad >=13 && edad <=17)
{
alert ("Usted es adolecente");}


else

if (edad <13){

    alert ("Usted es un niño");
}
}
//FIN DE LA FUNCIÓN