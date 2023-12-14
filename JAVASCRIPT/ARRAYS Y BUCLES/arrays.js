/*
!
^
&
*
?
~
//
*/

/*

! ARRAYS
? Es una coleccion o agrupacion de elementos en una misma variable, cada uno de ellos ubicado por la posicion que ocupa el array.

? Los arrays se utilizan para almacenar y organizar datos de manera mas eficiente.


*/

//! CREAR UN ARRAY
const numeros = [1,2,3,4,5];
console.log(numeros);

//! ARRAY DE CADENA DE TEXTO
const comida = ["tacos", "sopita", "pan", "jugo"];
console.log(comida);

//! ARRAY MIXTO
const mixto = [
    "Pluma",
    8,
    true,
    {nombre:"Eli"}
];
console.log(mixto);


//! ARRAY VACIO

const lista = [];
console.log(lista);


//! AGREGAR ELEMENTOS A MI ARRAY VACIO

lista[0] = "Leche de soya";
lista[1] = "Tofu";
lista[2] = "Verduras";
lista[3] = "Huevos";
console.log(lista);

//! OTRA MANERA DE CREAR ARRAYS
const frutas = new Array("Manzana", "Naranja", "Peras", "Mandarinas", "Uvas verdes");

/*
Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array.
*/

console.log(frutas);

//*Longitud de un array
console.log(frutas.length);


//! ACCEDER A LOS ELEMENTOS DEL ARRAY, ACORDE A SU INDICE
console.log(frutas[3]); // mandarinas
console.log(frutas[5]); // undefined

//! MODIFICAR UN ELEMENTO DEL ARRAY POR EL INDICE
const cremeria = ["Jamon", "Salchica", "Queso adobera", "Queso contija", "Yogurth"];
console.log(cremeria);

//! CAMBIAMOS UN ELEMENTO DE QUESO A QUESILLO

cremeria[2]="Quesilo";
cremeria[4]="Danonino del grande";
console.log(cremeria);

//!Arreglo de arreglos o multidimencional
console.log("Arreglo de arreglos");

// Estados: Estado de Mexico, Guadalajara, Yucatan, Sonora, Oaxaca, CDMX.

// Platillos: Guajocolombo, Torta ahogada, Panuchos, Dogos, Tlayuda, Tacos.

const estados = [ "Estado de Mexico", "Guadalajara", "Yucatan", "Sonora", "Oaxaca", "CDMX"];

const platillos = ["Guajocolombo", "Torta ahogada", "Panuchos", "Dogos", "Tlayuda", "Tacos"];

const menu = [estados, platillos];

console.log (menu [0][2]);
/*
En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.
*/
console.log(`El ${menu [1][0]} se come en ${menu [0][0]}`);

/*
! METODOS DE ARRAYS
& Metodo de cola (queue).
? Los metodos de cola implican agregar elementos al final del array y eliminar elementos al inciio del array. Sigue el principio de FIFO (First-in-first-out) lo que significa el primer elemento añadido es el primer elemento eliminado.
* push
* shift
* unshift

& Metodo de pila (stak). 
?Implica agregar elementos al final del array y elimar elementos del final del array. Sigue el principio LIFO (Last-in-first-out) que significa el ultimo elemento anhadido es el primero en ser eliminado.
* push
* pop

*/

console.log("Metodos de Arrays");
const ch35 = ["Dany", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
console.log(ch35);

//* pop() - Eliminar el ultimo elemento del array

let popch35 = ch35.pop();
console.log(popch35); // devuelve el dato eliminado
console.log(ch35)//elimina el dato de la lista

//* push() - Agregar al final del array

let pushch35 = ch35.push("Mony");
console.log(ch35);

//* shift() - Quitar primero del array

let shiftch35 = ch35.shift();
console.log(ch35);

//* unshift() - Agregar al principio del array

let unshiftch35 = ch35.unshift("Eli");
console.log(ch35);

//* reverse() - cambia el sentido del ordenamiento del array

let reversech35 = ch35.reverse();
console.log(ch35);

/*
!INVESTIGAR:
* sort
* forEach
* slice
* splice
*indexOf

*/




