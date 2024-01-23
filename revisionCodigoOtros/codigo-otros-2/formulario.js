// Comenzaremos declarando las variables de los elementos del DOM
const formulario = document.querySelector(".formulario"); 
const nameF = document.querySelector("#name");
const ageF = document.querySelector("#age");
const nationalityF = document.querySelector("#nationality");
const lista = document.querySelector("#lista-de-invitados");

//funcion para el formulario
formulario.onsubmit = function (e) {
  e.preventDefault();

  const nombre = nameF.value;
  const edad = ageF.value;
  const nacionalidad = nationalityF.value;
  if (nombre.length > 0 && edad > 18 && edad < 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

// agregar invitados a la lista
function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }
  crearElemento(nombre, edad, nacionalidad);
}


function crearElemento(nombre, edad, nacionalidad) {
  //Div que va a contener nombre, edad nacionalidad
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  creaContenido(elementoLista, "Nombre", nombre);
  creaContenido(elementoLista, "Edad", edad);
  creaContenido(elementoLista, "Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);
  botonBorrar.onclick = function () {
    botonBorrar.parentNode.remove();
  };
}

function creaContenido(elementoLista, etiqueta, valor) {
  const span = document.createElement("span");
  const input = document.createElement("input");
  const espacio = document.createElement("br");
  span.textContent = `${etiqueta}: `;
  input.value = valor;
  elementoLista.appendChild(span);
  elementoLista.appendChild(input);
  elementoLista.appendChild(espacio);
}
