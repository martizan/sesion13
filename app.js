function suma( a, b ) {
    return a + b;
 }

 function resta( a, b ) {
    return a - b;
 }

 function multiplicacion( a, b ) {
    return a * b;
 }

 function division( a, b ) {
    if (b === 0) {
        return `error: Division por cero.`;
     }
     return a / b;
   }

function calculadora(operacion) {
    const num1 =parseFloat (document.getElementById('num1').value);
    const num2 = parseFloat (document.getElementById('num2').value);
    let result;


    if (isNaN(num1) || isNaN(num2)) {
        result = 'por favor, ingresar numeros validos.';
    } else {
        if (operacion === 'Suma') {
            result = suma(num1, num2);


        } else{
         if (operacion === 'Resta') {
            result = resta(num1, num2);
         } else {
            
            if (operacion === 'Multiplicación') {
                result = multiplicacion(num1, num2);
            } else {
                if (operacion === 'División') {
                    result = División(num1, num2);
                } else {
                    result = 'Operacion no valida.';
                }
            }    
         }

        }
    }
    
document.getElementById("result").innerHTML = `<strong>resultado</strong>
<br> $(operacion): ${result}`;
}