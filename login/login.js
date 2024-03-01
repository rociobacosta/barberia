//carga inicial de datos o Semilla 


const productosBase = [
  {
    descripcion : "Su placa de video NVIDIA GeForce MX570 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. ",
    precio:1435000,
    nombre: "Notebook Dell Inspiron 16.",
    fechaDeCreacion: Date.now,
    stock:3,
    foto:"https://http2.mlstatic.com/D_NQ_NP_2X_874260-MLA73042504415_112023-F.webp",
    permite_stock_negativo: false,
  },
  {
    descripcion : "Juega títulos de PS5 y PS4 en discos Blu-ray. También puedes descargar juegos digitales de PS5 y PS4 desde PlayStation® Store. ",
    precio:1100000,
    nombre: "Sony Playstation 5 825gb",
    fechaDeCreacion: Date.now,
    stock:2,
    foto:"https://http2.mlstatic.com/D_NQ_NP_2X_690767-MLU72970552897_112023-F.webp",
    permite_stock_negativo: false,
  },
  {
    descripcion : "Con el TV WE24MT005 vas a poder disfrutar de tus contenidos favoritos como películas y programas de interés, con gran calidad y desde la comodidad de tu sillón.",
    precio:363000,
    nombre: "Smart Tv Philco Pld50hs2250pi Led Hdr 4k 50",
    fechaDeCreacion: Date.now,
    stock:0,
    foto:"",
    permite_stock_negativo: false,
  }
]

const local_storage_llaves = {
  PRODUCTOS: "productos",
  USUARIO: "usuario"
}


window.onload = function(){
  const productos = obtenerLocalStorage(local_storage_llaves.PRODUCTOS)

  if (productos == null || productos == undefined) {
    agregarLocalStorage(local_storage_llaves.PRODUCTOS, productosBase);
  }else{
    console.log("El local storage posee datos");
  }
}

function obtenerLocalStorage(key){
  const res = localStorage.getItem(key);
  return JSON.parse(res);
}

function agregarLocalStorage(key, objeto) {
  localStorage.setItem(key, JSON.stringify(objeto))
}