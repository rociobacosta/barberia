//a
const primero = 15;
const segundo = 7;
const tercero = 9;
const cuarto = 25;
const quinto = 14;

if(primero % 2 === 0){
  console.log("La variable es par");
}else{
  console.log("La variable es impar");
}

if(segundo % 2 === 0){
  console.log("La variable es par");
}else{
  console.log("La variable es impar");
}

if(tercero % 2 === 0){
  console.log("La variable es par");
}else{
  console.log("La variable es impar");
}

if(cuarto % 2 === 0){
  console.log("La variable es par");
}else{
  console.log("La variable es impar");
}

if(quinto % 2 === 0){
  console.log("La variable es par");
}else{
  console.log("La variable es impar");
}

//b
const elemento = (`<h1>Hola Mundo</h1>`);
console.log(elemento);

//c
const elementoColor = (`<h1>Hola Mundo</h1> {color: red}`);
console.log(elementoColor);

//d
console.log('   | ');
console.log('  | |');
console.log(' |   |');
console.log('|     |');

//e
let numeroDeCancha = 5;
let estaAlquilada = false;
let esTechada = true;
let precioCancha = 120;
let clima = "soleado";



if(estaAlquilada == false && esTechada == true && clima == "lluvioso"){
  console.log(`Felicidades su cancha fue reservada con exito, por favor abone el monto de $${precioCancha}`);
}else if(estaAlquilada == false && clima == "soleado" && (esTechada == true || esTechada == false)){
  console.log(`Felicidades su cancha fue reservada con exito, por favor abone el monto de $${precioCancha}`);
}else{
  console.log(`Lo sentimos, en estos momentos no podemos tomar tu reserva`);
}
