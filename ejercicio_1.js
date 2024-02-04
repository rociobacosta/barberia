//a
const fin = "fin del ejercicio";

//b
const a = "hola";
const b = "como";
const c = "estas";
const d = "tanto";
const e = "tiempo";

console.log(a + " "+ b +" "+ c + " "+ d +" "+  e);


//c
const fruta = 10.5;
const verdura = 15.3;
const carne = 2.10;
const comidaMascota = 7.20;
const papelHigienico = 5.25;
const yerba = 7.20;
const resultado = fruta + verdura + carne + comidaMascota + papelHigienico + yerba ;
console.log (resultado);

const descuento = (comidaMascota * 10) / 100;
console.log(`El total con el descuento de comida para mascotas es: ${ resultado - descuento}`);

const recargo = (resultado * 18) / 100;
const cuota = (recargo + resultado) / 3;
console.log(`El total de la compra con recargo es: $${resultado + recargo}, usted realizo el pago en 3 cuotas de $${cuota}`);

const mitad = resultado / 2;
const recargoMitad = (mitad * 18) /100;
const cuotaMitad = (mitad + recargoMitad) / 3;
console.log(`El total de la compra que resta pagar con recargo es: $${mitad + recargoMitad}, usted realizo el pago en 3 cuotas de $${cuotaMitad}`);


//d
const primero = 7;
const segundo = 15;
const tercero = 17;
const cuarto = 2;
const quinto = 11;
const sexto = 23;

const primerPregunta = primero > quinto;
const segundaPregunta = tercero <  sexto;
const tercerPregunta = primero > quinto && cuarto > segundo;
const cuartaPregunta = tercero <= segundo && sexto > primero;
const quintaPregunta = quinto == quinto && segundo <= cuarto;
const sextaPregunta = primero > quinto || cuarto > segundo;
const septimaPregunta = tercero <= segundo || sexto > primero;
const octavaPregunta = quinto == quinto || segundo <= cuarto;


console.log(primerPregunta);
console.log(segundaPregunta);
console.log(tercerPregunta);
console.log(cuartaPregunta);
console.log(quintaPregunta);
console.log(sextaPregunta);
console.log(septimaPregunta);
console.log(octavaPregunta);

if(cuarto % 2 == 0 && cuarto > 50){
  console.log(`es par y mayor a 50`);
}else{
  console.log(` no es par o no es mayor a 50`);
}

if(!(sexto % 2 == 0) || sexto >= 8 ){
  console.log(`es impar o mayor a 8`);
}else{
  console.log(`es par o menor a 8`);
}