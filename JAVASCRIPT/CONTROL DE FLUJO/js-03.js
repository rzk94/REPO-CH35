console.log("Hola CH35");

/*
*CONTROL DE FLUJO Y ESTRUCTURA DE CONTROL

Las estructuras de control son un componente fundamental dentro de la programacion, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar codigo, podemos mencionar las siguientes:

- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable

 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista

*/


/*

*DECLARACION DE SENTENCIA if-else

*Palabra reservada if para comenzar la declaracion, se coloca un parentesis () donde se debe colocar una expresion logica (true o false), se abre y cierran llaves {} para indicar que sentencia va a ejecutar si la condicion se cumple (true).

*Despues de la llave {} declarada para el bloque de ejecucion if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar mas expresiones dentro de un ().
*Simplemente colocamos otras llaves {} para indicar el bloque de codigo que tiene que ser ejecutado en caso de que la condicion no se cumpla (false).

*/

let n = 15;
if (n > 10) {
    console.log (true);
} else {
    console.log(false)
}
/*

if-else-if
 *
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso

*/


// if anidados

let edad = 70
if (edad < 18) {
    console.log("Eres menor de edad, retirate");
} else if (edad >= 18 && edad < 65){
    console.log("Eres un adulto");
} else {
    console.log("Eres un adulto mayor");
}

/*

Sentencia switch

La sentencia switch es otro tipo de estructura de control de flujo, que, nuevamente se encuentra en diversos lenguajes de prohgramacion.
Es bastante parecida a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcacion (particion de caminos), sino que se secciona en multiples casos (case) que, dependiendo de la expresion que cumpla con uncaso especifico, sera la secuencia que se va a ejecutar, dentro de la declaracion.

Declaracion:
Se empieza por colocar la palabra reservada switch. seguido de esto, colocamos parentesis () donde se debe colocar el valor que va a indicar que sentencia/caso se va a ejecutar.
Falta indicar el bloque de codigo que se limita a esta sentencia, como lo haciamos en la sentencia if o con las funciones.

Dentro de este bloque de codigo, falta colocar los casos para cada valor que se desee, establecer segun sea el valor indicado dentro del parentesis ().
Cada uno de estos casos se separa de la siguiente manera:

case valor: instruccion a ejecutar si el valor empata con este caso.
Despues, para indicar que la ejecucion de las sentencias deben cortarse cuando se cumpla, se coloca la instruccion break.
cuando terminemos de establecer los casos que necesitemos declarar, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.
Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocado no empata con ningun otro dentro de la sentencia o en ninguno de los casos.
default : mensaje no disponible.

*/

let dia = "sabado";
switch (dia){
    case "lunes":
        console.log ("Odio los lunes att: Garfield");
        break;
    case "martes":
        console.log ("Quien avienta cohetes los martes");
        break;
    case "miercoles":
        console.log ("Toca presentar proyecto :)");
        break;
    case "jueves":
        console.log("Juebebes, casi viernes");
        break;
    case "viernes":
        console.log("Viernes de disfraces");
        break;
    case "sabado":
        console.log("sabadrink");
        break;
    case "Domingo":
        console.log("Descansa");
        break;
    default:
            console.log ("Dia desconocido");
    break;

} // TERMINA SWITCH

/*
OPERADOR TERNARIO

Expresion condicional if-else nas simple y legible.
Principalmente se usa para simplificar condiciiones de una sola expreison.
Tambi[en puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el codigo se puede volver confuso y poco legible.

Su declaracion es la siguiente:

    Palabra reservada var, let o const:
Se le asigma como si se tratara de una variable, operador de asignacion "=", seguido de este operador, hay que colocar una expresion logica, esta va dentro de un parentesis (), despues hay que colocar un caracter ? que indica el camnino a seguir, dependiendo de si se cumple o no la expresion.

Para separar el resultado true de false debemos agregar un caracter de :, del lado izquierdo se coloca la sentencia a ejecutar.
*Si se cumple la condicion, del lado derecho se coloca la sentencia a ejecutar.

*/

// Ejemplo de operador ternario

let verificacion = n > 5 ? "si es mayor" : "No es mayor"
console.log (verificacion);


/*

Cuando usar if-else o switch?
if-else: cuando necesitamos tomaar decisiones bajo condiciones mas flexibles.
switch: cuando tengamos un conjunto fijo de valores para comparar una expresion.

*/


///////////////////////////////////////////

// Ejercicios para esta sesion

/* 
!Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 
*/
let age = 18;
if (age >= 18) {
    console.log("Puede votar.");
} else {
    console.log("No puede votar.");
}


/* 
!Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

let num1 = 0;
if ( (num1 % 2) === 0 && num1 > 1) {
    console.log(true);
} else {
    console.log(false);
}

/* 
!Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */


let num2 = 27;
if ( ((num2 % 4) === 0 || (num2 % 9) === 0) && num2 > 1) {
    console.log(true);
} else {
    console.log(false);
}


/* 
!Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

let genero = "accion";
switch (genero) {
    case "accion":
        console.log ("Rapidos y Rabiosos");
        break;
    case "drama":
        console.log ("La rosa de Guadalupe");
        break;
    case "comedia":
        console.log ("Un viernes de locos");
        break;
    case "romance":
        console.log("Amor a primera visa");
        break;
    case "suspenso":
        console.log("La llamada");
        break;
    case "terror":
        console.log("Esas no las veas :(");
        break;

    default:
            console.log ("No hay en el catalogo");
    break;
}

/* 
!Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

let operacion = "deposito";

if ( operacion === "retirar dinero"){
    console.log("Cuanto quiere retirar?");
} else if ( operacion === "transferencia"){
    console.log("Indique numero de cuenta a tranferir");
} else if ( operacion === "deposito"){
    console.log("Cuanto quiere depositar?")
} else if ( operacion === "pago de servicios"){
    console.log("Que servicio quiere pagar?");
} else {
    console.log("Operacion no reconocida");
}

/* 
!Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

let op1 = "dolares";
let op2 = "euros";
let op3 = "yenes";
let op4 = "libras";
let op5 = "francos";

let monedaConversion = op3;
let pesos = 1000;

switch (monedaConversion) {
    case op1:
        let result1 = pesos/17;
        console.log ("la cantidad es: " + result1 +" "+ op1);
        break;
    case op2:
        let result2 = pesos/22;
        console.log ("la cantidad es: " + result2 +" "+ op2);
        break;
    case op3:
        let result3 = pesos/8.41;
        console.log ("la cantidad es: " + result3 +" "+ op3);
        break;
    case op4:
        let result4 = pesos/21.75;
        console.log ("la cantidad es: " + result4 +" "+ op4);
        break;
    case op5:
        let result5 = pesos/19.77;
        console.log ("la cantidad es: " + result5 +" "+ op5);
        break;

    default:
            console.log ("Moneda no disponible.");
    break;
}





