//1
//a
let participantes = ["Ana", "Osvaldo", "Raúl", "Celia", "Maria", "Antonio"];

for (let index = 0; index < participantes.length; index++) {
  const element = participantes[index];
  console.log(element);
}
console.log("----------------------------------");


//b
//imprima el nombre de los participantes en orden inverso

// let participantesInvertido = participantes.reverse();
// console.log(participantesInvertido);

const maximoIndex = participantes.length - 1;

for (let index = maximoIndex; index >= 0 ; index--) {
  const element = participantes[index];
  console.log(element);
}
console.log("----------------------------------");


//c
//diga cuantas vocales tienen los nombres en el array

let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;

for (let index = 0; index < participantes.length; index++) {
  const participante = participantes[index];

  for (let indexParticipante = 0; indexParticipante < participante.length; indexParticipante++) {
    const vocal = participante[indexParticipante];
    switch (vocal.toLowerCase()) {
      case "a":
        a++;
        break;
      case "e":
       e++;
       break;
      case "i":
       i++;
       break;
      case "o":
      o++;
      break;
      case "u":
      u++;
      break;
    default:
     break;
    }
    
  }
  
}

console.log(`A se repite = ${a} veces`);
console.log(`E se repite = ${e} veces`);
console.log(`I se repite = ${i} veces`);
console.log(`O se repite = ${o} veces`);
console.log(`U se repite = ${u} veces`);
console.log("----------------------------------");


//d
//imprima en consola los nombres de los partipantes que comiencen con la letra "a"

const primerIndice = 0;

for (let index = 0; index < participantes.length; index++) {
  const participante = participantes[index];

  if (participante[primerIndice].toLowerCase() === "a") {
    console.log(participante);
  } 
}