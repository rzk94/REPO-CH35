/*
! Manipulacion del DOM.
* Leer y traer nodos del arbol del DOM.
    document.getElementByID (trae elementos por Id)
    document.getElementsByClassName (trae elementos por class)
    document.getElementsByTagName (trae elementos por etiquetas)
*/

//getElementbyId
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText); // Traer un string (Texto que vive en mi id)

//getElementsByC;assName
const titulos = document.getElementsByClassName("tlttle");
console.log(titulos);
console.log(titulos.length) // Devuelve la longitud de elememtos de la clase
console.log(typeof titulos); //Muestra que es un object porque es una coleccion de arrays

//getElementsByTagName
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

//Métodos para llamar elementos mediante selectores de CSS
//se usa para procesos más especificos y la sintáxis querSelector
//-document.querySelector ("selector"); //#,.,<>
//document.querySelectorAll (). Seleccionar los elementos que se especifiquen.
//siempre van a trar el primer elemento con el selector indicado


//querySelector
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".titlle");
console.log(queryClass);

//querySelectorAll
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con JS
titulo.style.textAlign = "center";
titulo.style.color = "#5058F2";

//Manipular el texto de un elementos
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesion de manipulacion del domo CH35";
titulo2.style.color = "#F23D3D";

//Métodos para crear y agregar elementos en el DOM. Este proceso se divide
//en dos: "crear el nodo y agregar el nodo".
//-crear nodos
//document.createElement ("element") --> Crea elementos a partir de etiquetas
//document.creteText Node("text")--> Crea texto dentro de las etiquetas.


const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/*
Agregar nodos
*   parentElement.appendChild(const);
*   parentElement.append(const);
*   parentElement.insertBefore(const);
*   parentElement.insetAdjacentElement(const);
utilizaremos mayormente apprendChild
*/

// Obtengo el elemento padre por tg, class o id
const parentElement = document.getElementById("dif");
// Crear el texto que vivira el nodo1
const textNodo1 = document.createTextNode("imagen agregada desde el DOM");
// Inserto el texto en el nodo1
nodo1.appendChild(textNodo1);
// Insertar nodo1 en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "Karla, sans-serif";
parentElement.style.color = "#201226";

//* Agregando imagen
// Inserto el imgNodo en el elemento padre para definirlo posteriormente
parentElement.appendChild(imgNodo);
//Accedo a las propiedades de la imagen
imgNodo.src = "pages/src/femalecodertocat.png";
imgNodo.alt = "octocat github";
imgNodo.width = "300";

/*
Otra forma de leer y modificar nodos
    document.outerHTML (leer)
    node.innerHTML (escribir sobre el nodo)

*/

const elementoOuter = titulo2.outerHTML;
console.log(elementoOuter);
titulo2.innerHTML = "Manipulacion del DOM - CH35";