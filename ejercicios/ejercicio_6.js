let operacion = prompt(`Que operación deseas hacer? +, -, * o / `);

let mensajeError = "Operación invalida";

function sumar(a,b){
  return a + b;
}

function restar(a,b){
  return a - b;
}

function multiplicar(a,b){
  return a * b;
}

function dividir(a,b){
  return a / b;
}

if(operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/"){

  let primerValor = prompt(`Elige el primer número`);
  primerValor = parseInt(primerValor);
  let segundoValor = prompt(`ELige el segunda valor`);
  segundoValor = parseInt(segundoValor); 


    switch (operacion) {
    case "+":
      let operacionSumar = sumar(primerValor, segundoValor);
      let mensajeSuma = "El resultado de la suma es: ";
      mensaje(mensajeSuma, operacionSumar);
      
      break;
      case "-":
        let operacionResta = restar(primerValor, segundoValor);
        let mensajeResta = "El resultado de la resta es: ";
        mensaje(mensajeResta, operacionResta);
      break;
      case "*":
        let operacionMultiplicacion = multiplicar(primerValor, segundoValor);
        let mensajeMultiplicacion = "El resultado de la Multiplicación es: ";
        mensaje(mensajeMultiplicacion, operacionMultiplicacion);
      break;
      case "/":
        let operacionDivision = dividir(primerValor, segundoValor);
        let mensajeDivision = "El resultado de la división es: ";
        mensaje(mensajeDivision, operacionDivision);
      break;
    default:
      alert(mensajeError);
      break;
  }
}else{
  alert(mensajeError);
}

function mensaje (mensaje, oper){
  alert(mensaje + oper);
}

// if(operacion == "+"){
//   let operacionSumar = sumar(primerValor, segundoValor);
//   alert(operacionSumar);
// }else if(operacion == "-"){
//   let operacionResta = restar(primerValor, segundoValor);
//   alert(operacionResta);
// }else if(operacion == "*"){
//   let operacionMultiplicacion = multiplicar(primerValor, segundoValor);
//   alert(operacionMultiplicacion);
// } else if(operacion == "/"){
//   let operacionDivision = dividir(primerValor, segundoValor);
//   alert(operacionDivision);
// }else{
//   alert(mensajeError);
// }
