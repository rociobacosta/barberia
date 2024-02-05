let productos = []; // almacena los productos de la lista
let producto = ""; //se inicializa como string vacio y toma el valor de las opciones de la consola
let opcion = "";
let mensajeInicial=   "Por favor, ingrese una de las opciones: \n " +
"1 - Agregar producto \n " + 
"2 - Eliminar producto \n " + 
"3 - Ver lista de producto \n " + 
"4 - Filtrar lista \n" +
"5 - Salir" ;

opcion = prompt (mensajeInicial);

opcion = Number(opcion);

while(opcion !== 4){
  switch (opcion) {
    case 1:
      let producto = prompt ("Por favor ingrese el producto a la lista");
      productos.push(producto);
      opcion = prompt (mensajeInicial );
      opcion = Number(opcion);

      break;

      case 2:
        let mensaje = "";
        if(productos.length > 0){
          productos.pop();
          mensaje = "Producto eliminado.";
        }else{
          mensaje = "No  hay ningún producto para eliminar."
        } 
        opcion = prompt ( mensaje + mensajeInicial );
        opcion = Number(opcion);
      
      break;
  
      case 3:
        if(productos !== 0){
          let lista = "";
          for (let index = 0; index < productos.length; index++) {
            const element = productos[index];
            lista += `- ${element} \n`;
            
          }
          alert(lista);
        }else{
          alert("No hay productos para mostrar");
        }

        opcion = prompt (mensajeInicial );
        opcion = Number(opcion);

      break;


      case 4:


       break;
  
    default:
      break;
  }
}