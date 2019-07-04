/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
    var aumento;
    var nuevosueldo;

    sueldo = parseFloat( document.getElementById("sueldo").value);

    resultado = (10*sueldo)/100 + sueldo;

    document.getElementById("resultado").value = resultado


    alert("El resultado es " + resultado );
}
