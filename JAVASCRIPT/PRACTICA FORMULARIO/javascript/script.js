//Comentarios de una sola linea
/*comentarios 
miltilineas*/

// alert("Hola mundo");
// console.log("Este es un mensaje para consola");


// var nombre=prompt("ingresa tu nombre");
// alert("Hola, "+nombre+" bienvenide a la CH35.");


/*var numero1 = parseInt(prompt("Ingresa el primer numero"));
var numero2 = parseInt(prompt("Ingresa el segundo numero"));
// console.log("La suma de "+numero1+"+"+numero2+"="+(numero1+numero2));
console.log("suma: "+(numero1 + numero2));
console.log("resta: "+(numero1 - numero2));
console.log("multiplicacion: "+(numero1 * numero2));
console.log("division: "+(numero1 / numero2));*/


// var edad=prompt("Ingresa tu edad: ");

// if(edad<18){
//     alert("No eres legal.");
// }
// if(edad>=18&edad<30){
//     alert("Todavia estas chavx");
// }
// if(edad>=30){
//     alert("Ya estas mas cerca del panteon");
// }
// return edad;

//TIPOS DE DATOS Y VARIABLES

//scope es el alcance de nuestras variables

/*Var, let, const la diferencia es el alcance
var tiene un alcance global
let tiene un alcance local
const se mantiene sin ningun cambio
*/

/*string: cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied: no esta asignado o definido
 */


let nombre = "Daniel";
let invitadosextra = 2;
let esmayoredad = true;
let edad = 24;
let invitadoespecial = null;
let horadesalida = undefined;

document.write(nombre);

/*
Encasillamiento o tipado
nos es util para el mantenimiento del codigo ya que lo hace mas legible y facil de entender.
prevencion de errores para reducir la probabilildad de los mismos.
Mejora eel rendimiento de nuestro programa.
*/

let numero = 15;
let texto = "hola";

// con encasillamiento

let numeroencasillado = number = 5;
let textoencasillado = string = "Hola";

//typeof palabra reservada para saber que tipo de dato tenemos

console.log(typeod(nombre));


//conversion de string a number

/*let funcionnumber = console.log (typeof(nombre));
metodoparseint = console.log(typeof PerformanceObserverEntryList(nombre));
meotodoparsefloat=console.log(tyoeof parseFloat(nombre));*/

//parseint y parsefloat son funciones que se utilizan para convertir cadenas de texto en numero, ambas nos ayudan en este cambio.

/* 
conversion de number a string

console.log(typeof String(edad));
console.log(typeof edad.toString());

conversion de bolean a number

let numero = number (esmayoredad);

console.log(typeof(numero));


let texto = String(esmayoredad);

console.log(type(texto));
console.log(typeof esmayoredad.tostring());


let negacion = !esmayoredad;

console.log (negacion);

*/

//concatenar

let saludo = "Hola humanx";
let frase = "el futuro es hoy";

texto = saludo + frase;

console.log(texto);






