//1
//a
let participantes = ["Ana", "Osvaldo", "Raul", "Celia", "Maria", "Antonio"];
for (let index = 0; index < participantes.length; index++) {
  const element = participantes[index];
  console.log(element);
}
console.log("----------------------------------");
//b
// let participantesInvertido = participantes.reverse();
// console.log(participantesInvertido);

const maximoIndex = participantes.length - 1;
for (let index = maximoIndex; index >= 0 ; index--) {
  const element = participantes[index];
  console.log(element);
}
console.log("----------------------------------");
//c
participantes.forEach(participante => {
  if(participante.startsWith("A") || participante.startsWith("a") ){
     console.log(participante);
  }
})

