/*
Funciones. Son bloques de codigo con instgrucciones que se pueden reutilizar las veces que sean necesarias.
Algunas funciones reeciben parametros y otras no reciben parametros.

*/


//FUNCION QUE PERMITA SALUDAR

function saludar () {
    console.log("Hola desde una funcion");
}

//Ejecutar la funcion con el nombre de la funcion y los parametros

saludar();
// saludar();
// saludar();


//Hoisting. Caracteristica de una funcion que nos permite invocarla desde su inicializacion, es decir, se puede invocar antes del bloque de codigo o despues.

// SE INVOCA EN LA LINIEA 16 Y EN LA LINEA 27
function saludar(){
    console.log("Hola invocando la funcion con hoisting");
}
saludar();

//FUNCIONES QUE RETORNAN ALGO. PARA QUE UNA FUNCION RETORNE ALGO (Un String, una operacion, una variable, etc.), necesitamos indicarle al codigo de la funcion que vamos a retornar mediante la palabra return.

function greeting() {
    return "Hola desde una funcion que retorna"
}
console.log(greeting());

//Funcion que retorna y recibe parametros
function sumar(x,y){
    return x + y;
}
let resultado = sumar(255, 245);
console.log(`El resultado de sumar x + y es ${resultado}`);

//CALCULAR EL CUADRADO DE UN NUMERO
function calcCuadrado (numero){
    return numero * numero;
}
let resultCuadrado = calcCuadrado(5);
console.log(resultCuadrado);

//Funciones flecha (Arrow function). Es una manera de declarar una funcion por declaracion sintetizando codigo y haciendolo mas legible.
//Funcion flecha para calcular el cubo de un numero

const CalcCubo = (number) => {
    return number * number * number;
}
let resultCubo = CalcCubo(3);
console.log(resultCubo);


//FUNCIONES ANONIMAS. Son un tipo de funciones que se declaran sin nombre de funcion y se alojan en el interior de una variable. Se hace referencia a ellas cada que vez que la utilizamos.
// Las funciones anonimas no permiten el hoisting (no se puede invocar antes de inicializarlas)

const mensaje = function () {
  return "Este es un msj desde una funcion anonima";
}
console.log(mensaje());

//Callbacks. Es pasar una función B por parámetro a una función A, de modo que la función A pueda ejecutar esa función de forma genérica desde su código.
//FUNCION B

const functionB = function () {
    console.log("Ejecutando funcion B");
  }

//FUNCION A que mandara a llamar a la funcion B

const functionA = function (callback) {
    callback();
  }

  functionA(functionB);
