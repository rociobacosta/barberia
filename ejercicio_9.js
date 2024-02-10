//1- Solicitar por la “prompt” al usuario que ingrese su nombre y su apellido (por separado). Almacenar esos datos dentro de un objeto de tipo persona, dicho objeto deberá tener una función que se llame saludar() que imprimirá en un alert o en consola “hola mi nombre es  + nombre + apellido”.

console.log("1-) --------------------------------");

 let nombre = prompt("Ingrese su nombre");
 let apellido = prompt("Ingrese su apellido");

class saludo{
  nombre = "";
  apellido = "";
  saludar = function saludar() {
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`);
  }

  constructor(nom, apell){
    this.nombre = nom;
    this.apellido = apell;
  }
}

let primerSaludo = new saludo(nombre, apellido);
primerSaludo.saludar();

console.log(" --------------------------------");



class empleados{
  nombre = "";
  apellido = "";
  legajo = 0;
  mail = "";
  rol = "";
  sueldo = 0;
  cantidadDiasVacaciones = 15;
  tomoVacaciones = false; 
  cantidadDiasUtilizados = 0;

  sueldoMayor = function sueldoMayor (){
    if (this.sueldo > 10000) {
      console.log(`El sueldo de ${this.nombre} es ${this.sueldo}, por lo tanto es mayor a 10.000`)
    }
  }
  sueldoYPrimeraLetra = function sueldoYPrimeraLetra(){
      console.log(`El sueldo de ${this.nombre} es ${this.sueldo}, por lo tanto es mayor a 35.000 y su nombre comienza con "a", "g", "l", o "h" `)
  }
 
  propiedades = function propiedades(){
    console.log(`Bienvenido ${this.nombre} ${this.apellido}, tu legajo es ${this.legajo}, tu mail registrado es ${this.mail}, tu rol en la empresa es ${this.rol}, tu sueldo es ${this.sueldo}`)
  }
  
  presentacion = function presentacion(nombre, apellido, rol){
    console.log(`Mi nombre es: ${this.nombre} ${this.apellido}. Soy ${this.rol} de la empresa.`);
  }

  diasRestantes = function diasRestantes(){
    console.log(`A el empleado ${this.nombre} ${this.apellido} le quedan ${this.cantidadDiasVacaciones} días de vacaciones para utilizar`);
  }

  siONoVacaciones = function siONoVacaciones(){
    if(this.tomoVacaciones == false){
    console.log("El empleado todavía no tomó ningún día de vacaciones")
    }else{
      console.log(`El empleado se tomó cantidad de ${this.cantidadDiasUtilizados} días utilizados de vacaciones.`)
    }
  }
  


  constructor(nombre, apellido, legajo, mail, rol, sueldo, cantidadDiasVacaciones, tomoVacaciones, cantidadDiasUtilizados){
  this.nombre = nombre;
  this.apellido = apellido;
  this.legajo = legajo;
  this.mail = mail;
  this.rol = rol;
  this.sueldo = sueldo;
  this.cantidadDiasVacaciones = cantidadDiasVacaciones;
  this.tomoVacaciones = tomoVacaciones; 
  this.cantidadDiasUtilizados = cantidadDiasUtilizados;
  }
}

let primerEmpleado = new empleados("ana", "lopez", 1532, "analopez@gmail.com", "administrativa", 38000, 20, true, 10);
let segundoEmpleado = new empleados("lucas", "martinez", 1566, "lucasmartinez@gmail.com", "administrativa", 39000, 10, false, 15);
let tercerEmpleado = new empleados("carlos", "perez", 1544, "carlosperez@gmail.com", "administrativa", 47000, 0, true, 15);



let arrayEmpleados = [primerEmpleado, segundoEmpleado, tercerEmpleado];  



//2- Crear un  array de objetos de empleados, los mismos deberán tener nombre, apellido, legajo, mail, rol, sueldo.   Recorrer el array en un ciclo e: 
//- Imprimir en la consola todos los sueldos mayores a  10.000
//- Imprimir en la consola todos los empleados cuyo sueldo sea mayor a 35.000 y cuyo nombre comience con la letra “a”, “g”, “l” o “h”.
//- Imprimir en la consola todos los empleados pero con un mensaje más personalizado, no imprimir el objeto si no cada una de sus propiedades.  
console.log("2) --------------------------------");

for (let index = 0; index < arrayEmpleados.length; index++) {
  const element = arrayEmpleados[index];
  element.sueldoMayor();
  element.propiedades();
}

for (let index = 0; index < arrayEmpleados.length; index++) {
  const element = arrayEmpleados[index];


  if (["a", "g", "l", "h"].includes(element.nombre.charAt(0).toLowerCase()) && element.sueldo > 35000 ){
    element.sueldoYPrimeraLetra();
  }
 }


// for (let index = 0; index < arrayEmpleados.length; index++) {
//   const element = arrayEmpleados[index];
//   element.sueldoYPrimeraLetra();
  
// }

// primerEmpleado.sueldoYPrimeraLetra();
// segundoEmpleado.sueldoYPrimeraLetra();
// tercerEmpleado.sueldoYPrimeraLetra();


//3- Crear una función que se llame “presentación” que reciba como parámetros el nombre, apellido y rol del empleado, dentro de la función 
//se deberá imprimir el mensaje “Mi nombre es: {nombre} {apellido}. Soy {Rol} de la empresa.

console.log("3) --------------------------------");
for (let index = 0; index < arrayEmpleados.length; index++) {
  const element = arrayEmpleados[index];
  element.presentacion();
}





//4- Al objeto empleado, agregarle las propiedades cantidad de días de vacaciones, si tomó o no vacaciones y cantidad de días utilizados. 
//Crear una función dentro del objeto que devuelva al usuario la cantidad de días restantes y otra función que en base al valor de si “tomó o no vacaciones” 
//retorne un mensaje “El empleado todavía no tomó ningún día de vacaciones” y “El empleado se tomó cantidad de días utilizados de vacaciones.


console.log("4) --------------------------------");
for (let index = 0; index < arrayEmpleados.length; index++) {
  const element = arrayEmpleados[index];
  element.siONoVacaciones();
}

for (let index = 0; index < arrayEmpleados.length; index++) {
  const element = arrayEmpleados[index];
  if(element.cantidadDiasVacaciones > 0 ){
    element.diasRestantes();
  }
  
}



//5- Solicitar por prompt al usuario si desea emitir un reporte de su status (utilizar confirm) en caso de que la respuesta sea true (ok) solicitar su nombre, 
//buscarlo en el array de empleados y si el empleado no existe imprimir un alert que diga “No existe en la base” en caso de existir, imprimir en un alert todos 
//los datos del empleado.

const reporte = prompt(`¡desea emitir un reporte de su status? oprima T (true) o F(false)`);

if (reporte == "t".toLowerCase()) {
  const nombre = prompt("¿Cual es su nombre?");
  if(nombre == primerEmpleado.nombre){
    alert(`Hola ${primerEmpleado.nombre}`);
  }else if (nombre == segundoEmpleado.nombre) {
    alert(`Hola ${segundoEmpleado.nombre}`);
  }else if(nombre == tercerEmpleadoEmpleado.nombre){
    alert(`Hola ${tercerEmpleado.nombre}`);
  }else{
    alert("No existe en la base")
  }
}