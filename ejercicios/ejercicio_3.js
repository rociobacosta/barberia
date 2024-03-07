//a
let enteros = [15, 7, 21 , 2, 6];

for (let index = 0; index < enteros.length; index++) {
  if(enteros[index] % 2 == 0){
    console.log(`${enteros[index]} El número es par`);
  }else{
    console.log(`${enteros[index]} El número es impar`);
  }
  
}

//b
let string = ["Fuz", "Minie", "hola", "gatitos","tiernos", "mundo"];
let frase = "";

for (let index = 0; index < string.length; index++) {
  if(string[index] == "hola" || string[index] == "mundo"){
     frase += " " + string[index]; 
  }
}
console.log(frase)


//c
const peces = [15, 22, 5, 7, 12];
let contadorPeces = 0;
let mayor = 0;
let menor = 100;

while(contadorPeces < peces.length){
 if(peces[contadorPeces] > mayor ){
   mayor = peces[contadorPeces];
 }
 
 if(peces[contadorPeces] < menor){
   menor = peces[contadorPeces];
 }

 contadorPeces++;
}

console.log(mayor);
console.log(menor);

//d
let base = 2;
let exponente = 8;
let resultado = 1;

for(i = 0; i < exponente ; i++){
  resultado *= base;
}
console.log(resultado);