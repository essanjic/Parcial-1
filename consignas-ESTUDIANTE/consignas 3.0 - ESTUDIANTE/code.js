/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */ 
  datosPersona.nombre = prompt("Ingrese su nombre:")
  datosPersona.edad = parseInt(2022 - prompt("Ingrese año de nacimiento: "));
  datosPersona.ciudad = prompt("Ingrese su ciudad: ");
  let interes = confirm("¿Tiene interés en JavaScript?")
  datosPersona.interesPorJs = interes == true ? "Si" : "No";
}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  {
    document.querySelector("#nombre").innerHTML = datosPersona.nombre;
    document.querySelector("#edad").innerHTML = datosPersona.edad;
    document.querySelector("#ciudad").innerHTML = datosPersona.ciudad;
    document.querySelector("#javascript").innerHTML = datosPersona.interesPorJs;
  }
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let tarjetaContenedora = document.getElementById("fila");
  for (let materias of listado) {
    
    let container = document.createElement("div");
    let imagen = document.createElement("img");
    let lenguaje1 = document.createElement("p");
    let bimestre1 = document.createElement("p");

    let nodo1 = document.createTextNode(tarjetaContenedora.lenguajes);
    let nodo2 = document.createTextNode(tarjetaContenedora.bimestre);

    container.setAttribute("class", "caja");
    imagen.setAttribute("src", tarjetaContenedora.imgUrl);
    imagen.setAttribute("alt", tarjetaContenedora.lenguajes);
    lenguaje1.setAttribute("class", tarjetaContenedora.lenguajes);
    bimestre1.setAttribute("class", tarjetaContenedora.bimestre);

    lenguaje1.appendChild(nodo1);
    bimestre1.appendChild(nodo2);
    container.appendChild(imagen);
    container.appendChild(lenguaje1);
    container.appendChild(bimestre1);
    tarjetaContenedora.appendChild(container);
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

