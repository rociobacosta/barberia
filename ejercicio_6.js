let operacion = prompt(`Que operación deseas hacer? +, -, * o / `);
let primerValor = prompt(`Elige el primer número`);
primerValor = parseInt(primerValor);
let segundoValor = prompt(`ELige el segunda valor`);
segundoValor = parseInt(segundoValor);

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

if(operacion == "+"){
  let operacionSumar = sumar(primerValor, segundoValor);
  alert(operacionSumar);
}else if(operacion == "-"){
  let operacionResta = restar(primerValor, segundoValor);
  alert(operacionResta);
}else if(operacion == "*"){
  let operacionMultiplicacion = multiplicar(primerValor, segundoValor);
  alert(operacionMultiplicacion);
} else if(operacion == "/"){
  let operacionDivision = dividir(primerValor, segundoValor);
  alert(operacionDivision);
}