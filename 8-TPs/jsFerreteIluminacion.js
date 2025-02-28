/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad;
    var precio = 35;
    var precioConDescuento;
    var porcDescuento;
    var marca;
    var IIBB;
    var importeFinal;
    var flag = 0;

    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

    switch (cantidad) {
        case 1:
        case 2:
            porcDescuento = 0;
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                porcDescuento = 15;
            }
            else if (marca == "FelipeLamparas") {
                porcDescuento = 10;
            }
            else {
                porcDescuento = 5;
            }
            break;

        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                porcDescuento = 25;
            }
            else {
                porcDescuento = 20;
            }
            break;

        case 5:
            if (marca == "ArgentinaLuz") {
                porcDescuento = 40;
            }
            else {
                porcDescuento = 30;
            }
            break;

        default:
            porcDescuento = 50;

    }
    precioConDescuento = precio - porcDescuento / 100;

    importeFinal = cantidad * precioConDescuento;

    if (importeFinal > 120) {
        IIBB = importeFinal * .10;
        importeFinal = importeFinal + IIBB;
        flag = 1;
    }

    alert("Importe Final $ " + importeFinal);

    if (flag == 1) {
        alert("Usted pago de IIBB $ " + IIBB);
    }


    
      



    

}
