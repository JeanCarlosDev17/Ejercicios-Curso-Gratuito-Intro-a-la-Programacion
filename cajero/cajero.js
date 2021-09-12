var numBilletes50 = 0;
var numBilletes20 = 0;
var numBilletes10 = 10;

var valorSolicitado = 170;

var entregar = "";
var numBilletes10Transaccion = 0;
var numBilletes20Transaccion = 0;
var numBilletes50Transaccion = 0;

entregarBilletes();

function saldo() {}
function entregarBilletes() {
   numBilletes10Transaccion = 0;
   numBilletes20Transaccion = 0;
   numBilletes50Transaccion = 0;

   if (saldo()) {
      console.log(
         "El valor solicitado es " +
            valorSolicitado +
            "\nal iniciar hay \n" +
            numBilletes50 +
            " Billetes de 50 \n" +
            numBilletes20 +
            " Billetes de 20 \n" +
            numBilletes10 +
            " Billetes de 10"
      );
      if (valorSolicitado <= valorTotal()) {
         if (valorSolicitado > 0) {
            numBilletes50Transaccion = calcularBilletes(50, numBilletes50);
            numBilletes20Transaccion = calcularBilletes(20, numBilletes20);
            numBilletes10Transaccion = calcularBilletes(10, numBilletes10);
         }
         if (valorSolicitado > 0) {
            /* alert(
               "Error no contamos con lo suficienta para el dinero solicitado nos faltan " +
                  valorSolicitado -
                  (50 * numBilletes50Transaccion +
                     20 * numBilletes20Transaccion +
                     10 * numBilletes10Transaccion)
            ); */
            console.log(
               "Error no contamos con lo suficienta para el dinero solicitado nos faltan " +
                  valorSolicitado /*  -
                  (50 * numBilletes50Transaccion +
                     20 * numBilletes20Transaccion +
                     10 * numBilletes10Transaccion) */
            );
         } else {
            //  solo entrego y descuento si tengo completo para darle
            entregar =
               "para el monto de " +
               (50 * numBilletes50Transaccion +
                  20 * numBilletes20Transaccion +
                  10 * numBilletes10Transaccion) +
               " Entregamos  \n" +
               numBilletes50Transaccion +
               " billetes de 50 \n" +
               numBilletes20Transaccion +
               " billetes de 20 \n" +
               numBilletes10Transaccion +
               " billetes de 10";

            numBilletes50 = numBilletes50 - numBilletes50Transaccion;
            /* valorSolicitado = valorSolicitado - numBilletes50Transaccion * 50; */

            /* alert(numBilletes20);
            alert(numBilletes20Transaccion); */
            
            numBilletes20 = numBilletes20 - numBilletes20Transaccion;
            /* valorSolicitado = valorSolicitado - numBilletes20Transaccion * 20; */
            numBilletes10 = numBilletes10 - numBilletes10Transaccion;
            /* valorSolicitado = valorSolicitado - numBilletes10Transaccion * 10; */
            console.log(entregar);
            entregar = "";
         }
      } else {
         alert("Error no contamos con lo suficienta para el dinero solicitado");
      }
   }
   console.log(
      
         "\nal finalizar hay \n" +
         numBilletes50 +
         " Billetes de 50 \n" +
         numBilletes20 +
         " Billetes de 20 \n" +
         numBilletes10 +
         " Billetes de 10 \n"+
         "El valor pendiente por pagar  es " +
         valorSolicitado 
   );
}

function saldo() {
   console.log("HAY SALDO?");
   if (true) {
      console.log("si hay SALDO");
      return true;
   } else {
      console.log("no hay SALDO");
      return false;
   }
}

function valorTotal() {
   return 50 * numBilletes50 + 20 * numBilletes20 + 10 * numBilletes10;
}

function calcularBilletes(valorBillete, numBilletesDisponible) {
   

   var numBilletesEntegrados = 0;
   if (valorSolicitado > 0) {
      console.log(
         "voy a calcular para billetes de " +
            valorBillete /* +
            " valor restante a pagar " +
            valorSolicitado */
      );
      //validar que la cantidad sea mayor o igual a valorBillete  
      if (valorSolicitado >= valorBillete) {
         //si la cantidad  de billetes no esta agotada
         if (numBilletesDisponible > 0) {
            //si el valor del numero de billertes de valorBillete es mayor o igual al solicitado
            if (numBilletesDisponible >= Math.floor(valorSolicitado / valorBillete)) {
               numBilletesEntegrados = Math.floor(valorSolicitado / valorBillete);
               // numBilletesDisponible = numBilletesDisponible - numBilletesEntegrados;
               valorSolicitado = valorSolicitado - numBilletesEntegrados * valorBillete;
               console.log(
                  "\nSe necesitan entregar " +
                     numBilletesEntegrados +
                     " Billetes de " +
                     valorBillete +
                     ",  el valor restante es " +
                     valorSolicitado
               );
               return numBilletesEntegrados;
            }
            //si el numero de billetes de valorBillete es menor al valor solicitado se entregan todos
            else if (numBilletesDisponible < Math.floor(valorSolicitado / valorBillete)) {
               numBilletesEntegrados = numBilletesDisponible;
               valorSolicitado = valorSolicitado - numBilletesEntegrados * valorBillete;
               console.log(
                  "Entregados " +
                     numBilletesEntegrados +
                     " Billetes de " +
                     valorBillete +
                     ",  el valor restante es " +
                     valorSolicitado
               );
               return numBilletesEntegrados;
            }
         }
         else{
            //si la cantidad de billetes esta agotada retornar 0 billetes de esa denominacion
            console.log("No hay billetes de "+valorBillete)
            return 0;
         }
      }
   } else {
      return 0;
   }
}


function entregar(num50, num20, num10) {
   entregar = "Para el monto solicitado de " + valorSolicitado;
}
