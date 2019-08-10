function mostrar()
{
  var tipo;
  var edad;
  var nombre;
  var peso;
  var contador = 0;
  var acumuladorPesos = 0;
  var promedio;
  var cantidadAnimales=0;
  var esPrimerperro;
  var nombrePerroMasViejo;
 
  while (contador < 4)
  { 
    tipo = prompt("ingrese el tipo (perro/gato)");
    contador++;
 
    while (tipo != "perro" && tipo != "gato"){
 
   tipo = prompt("ERROR. debe ser perro o gato");
    }
 
    do
    {
      edad = prompt("ingrese la edad entre 1 y 25:");
      edad = parseInt(edad);
 
    }while (isNaN(edad) || edad < 1  || edad > 25);
    contador++;
 
    do
    {
   peso = prompt ("ingrese el peso entre 1 y 100");
   peso = parseInt(peso);
 
    }while (isNaN(peso) || peso > 100);
 
    nombre = prompt ("ingrese el nombre");
 
    acumuladorPesos = acumuladorPesos + peso;
    contador++;
  
  if (peso < 10 && edad > 10)
  {
    cantidadAnimales++;
 }
  if (esPrimerPerro)
   {
     edadMaxima = edad;
     nombrePerroMasViejo = nombre;
     esPrimerPerro = false;
   }
   else if (edad > edadMaxima)
   {
     edadMaxima = edad;
     nombrePerroMasViejo = nombre;
   }
  }
  contador++;
 }
   promedio = acumuladorPesos / contador;
