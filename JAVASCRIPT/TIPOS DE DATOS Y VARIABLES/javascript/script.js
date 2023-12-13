/* TIPOS DE DATOS
- String (cadenas de texto)
- Number (numericos)
- Booleans (booleanos: true or false)
- Null (nulos)
- Undefined (Indefinidos)
- Objects (Objects)
- Objects (Arrays)

console.log(); Nos permite visualizar en consola del navegador el codigo de JS.
console.warn();
console.error();
console.table();

*/

let firstName;
firstName = 'Daniel';
let lastName = 'Maldonado';

console.log(firstName + " " + lastName);
console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName);

/*ECMAScript 6 (ES6). Interpolacion de cadenas
- backticks `` (AltGr + 96)
- Para variables las invocamos ${variable}
- Texto para string
*/

let age = 37;
console.log(`Mi nombre es ${firstName} y mi apellido es ${lastName} y tengo ${age} años`);

//console.warn();
console.warn(`Precaucion, no es buena practica dejar sin punto y coma`);

//console.error();
console.error(`Status 404: Failed`);


/* 

- Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.
- Los arrays se pueden manipular mediante métodos específicos.
- Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.
- Un array posee n cantidad de elementos.
- Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato.
*/

let arreglo1 = []; //Array vacio
console.log(`Array vacio ${arreglo1}`);
//Los elementos de un array se separan mediante comas
let cars = ["Volkswagen", "BMW", "Mazda", "Kia"]; // Array de String
console.log(cars);
// Longitud e indice son diferentes. La logitud (length) es el numero de elementos y el indice corresponde a cada elemento a partir del 0.

console.log(typeof(cars));
let salaries = [1500, 12000, 18000, 25000, 2000, 10000, 18500, 10200, 20500, 15300, 17000, 17200];
console.log(salaries.length);
console.log(salaries);

/*
Objetos. los objetos son tipos de datos en JS, con una estructura definida que nos permiten almacenar informacion mediante llaves (claves) y valores.
Su sintaxis es la siguiente:
const object = {
    clave1: valor1 (dato1),
    clave2: valor2 (dato2)
}
Los objetos pueden almacenar diferentes tipos de valores.

*/


const employee = {
    firstName: "Rey David",
    lastName: "Martinez",
    age: 29,
    country: "Mexico"
}

console.log(employee);
//Mostrando mi array como table
console.table(cars)

//Mostrando mi objeto como table
console.table(employee);


