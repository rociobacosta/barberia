//comparar el nombre de una persona y retornar el mensaje: mi nombre 
//es: + nombre y almacenarlo en una variable e imprimirlo en consola

let nombre = prompt("¿Cual es su nombre?");

function saludo(){
  let saludoNombre = "Mi nombre es: " + nombre;
  console.log(saludoNombre)
}

saludo();

//crear una funcion que se llame contador que reciba como parametro un numero y que en un ciclo for imprima en consola todos los numeros desde el primer numero hasta el ultimo indicado por parametro.

let numeros = [15, 7, 9, 15, 26];


function contador(num){
  for (let index = 0; index < num.length; index++) {
    const element = num[index];
    console.log(element);
  }

}

contador(numeros);