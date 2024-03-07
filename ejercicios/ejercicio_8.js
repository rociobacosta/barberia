//crear un array de objetos json, en base al analisis de un objeto en la vida
// real, ese array tiene que estar compuesto por 3 objetos de un objeto 
// que elija para hacer el mapeo, el objeto tiene que tener 5 propiedades
// por ultimo vamos a elegir uno de ellos, usando su indice, vamos a imprimir 
//todas sus propiedades con un console.log


const autos = [
  {
    cantidadPuertas: 4,
    color: "verde",
    marca: "Ford",
    modelo: "Ka",
    añoFabricacion: 2014,
    cierreCentralizado: true
  },
  {
    cantidadPuertas: 5,
    color: "rojo",
    marca: "Fiat",
    modelo: "Cronos",
    añoFabricacion: 2019,
    cierreCentralizado: true
  },
  {
    cantidadPuertas: 5,
    color: "gris",
    marca: "Peugeot",
    modelo: "208",
    añoFabricacion: 2023,
    cierreCentralizado: true
  }
]

const autoA = ` ${autos[0].cantidadPuertas} \n ${autos[0].color} \n ${autos[0].marca} \n ${autos[0].modelo} \n ${autos[0].añoFabricacion}  \n ${autos[0].cierreCentralizado}`;
console.log(autoA);
console.log("-----------------------------------------------");

for (let index = 0; index < autos.length; index++) {
  const auto = autos[index];
  console.log(auto);
}