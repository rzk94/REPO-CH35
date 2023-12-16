/*
! OPERADOR
?Es un signo que especifica que debe efectuar una determinada operacion.

? Operadores:
?   Aritmeticos (+, -, *, /, %, ++, --)
?   de asignacion (=)
?   logicos (&&, ||, )
?   de comparacion (==, +++, !=, !==, <, >, >=, <=)
?   de cadena (toLowerCase, toUpperCase, trim, to String, concat, +)

& Operadores aritmeticos
?  (+)  Suma
?  (-)  resta
?  (*)  multiplicacion
?  (/)  division
?  (%) residuo: el residuo de una division
?  (++) incremento: incrementa en 1
?  (--) decremento: disminuye en 1

*/

let num1 = 5;
let num2 = 8;
let num1a = num1;
num1a++;
let num1d = num1;
num1d--;
console.log(`
 ${num1} + ${num2} = ${num1+num2}
 ${num1} - ${num2} = ${num1-num2}
 ${num1} * ${num2} = ${num1*num2}
 ${num1} / ${num2} = ${num1/num2}
 ${num1} % ${num2} = ${num1%num2}
 ${num1} -- = ${num1d}
 ${num1} ++ = ${num1a}
`);


//* Usando los operadores para un descuento
let precioReal = 1000;
let porcentajeDescuento = 20;

let cantidadDescuento = (precioReal * porcentajeDescuento)/100;
let precioConDescuento = precioReal - cantidadDescuento;


console.log("Precio real: " + precioReal);
console.log("Porcentaje de descuento: " + porcentajeDescuento + "%");
console.log("cantidad de decuento: " + cantidadDescuento);
console.log("Precio con descuento: " + precioConDescuento);

/* 
* Operadores de asignacion
? (=): Este operador no compara, lo qe hace es asignar.

let frutas = manzana;

*Operadores de comparacion
? (==): Igualdad compara si nuestros valores son iguales. 

*/

let num3 = 10;
let texto = "10";

console.log(num3 == texto);

/*
? (===): Igualdad estricta, compara si los valores son iguales y el tipo de dato
*/

let num4 = 10;
let texto1 = "10";
let texto2 = 10;

console.log(num4 === texto2);


//? (!=): Desigualdad o distinto este operador verifica si dos valores no son iguales y de ser necesario realiza la conversion.

let precioCaja = 1499;
let precioMaximo = 1500;

if (precioCaja != precioMaximo){
    console.log("El precio del producto es" )
}

if (precioCaja != precioMaximo){
    console.log("El precio del producto no es igual al precio maximo");
} else {
    console.log("El precio del producto ess igual al precio maximo permitido");
}

/*
? (!==) Desigualdad estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo y valor.

*/

let numero5 = 10;
let numero6 = "10";

if (numero5 !== numero6){
    console.log("Son diferentes");
} else {
    console.log("Los valores son iguales")
}

//? (>): Mayor que, basicamente nos indica si un valor es mayor que otro.

let puntuacionFinal = 85;
let puntuacionRequerida = 102;

console.log(puntuacionFinal > puntuacionRequerida);

//? (<): Menor que, basicamente nos indica si un valor es menor que otro.

let anhos = 20;
let edadLimite = 30;

console.log(anhos < edadLimite);

//? (>=) Mayor o igual que, y nos dice si un valor es mayor o igual a otro.

let edad = 40;
let edadNecesaria = 18;

console.log(edad >= edadNecesaria);

//? (<=) Menor o igual que, y nos dice si un valor es mayor o igual a otro.

let temperatura = 14;
let temperaturaMaxima = 21;

console.log(temperatura <= temperaturaMaxima);





//////////////////////////////////////
//!EJERCICIOS COMENTADOS PARA PODER CONTINUAR USANDO LA CONSOLA DURANTE LA CLASE SIN LOS PROMPT
// /*
// ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro
// */

// let numeroX = prompt("Ingresa un numero X:" );
// let numeroY = prompt("Ingresa un numero Y:" );
// if( numeroX === numeroY){
//     console.log(`Los numero son iguales`);
// } else if (numeroX < numeroY){
//     console.log(`${numeroX} es menor que ${numeroY}`);
// } else {
//     console.log(`${numeroX} es mayor ${numeroY}`);
// }

// /*
// ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no
// */

// let palabraX = prompt("Ingresa una palaba X:" );
// let palabraY = prompt("Ingresa una palabra Y:" );
// if( palabraX === palabraY){
//     console.log(`Las palabras son iguales`);
// } else {
//     console.log(`Las palabras no son iguales.`);
// }

///////////////////////////////////////////





//* OPERADORES LOGICOS
let mayorDeEdad = 18;
let tieneIdentificacion = true;

if (mayorDeEdad >= 18 && tieneIdentificacion) {
    console.log("Puedes rentar el salon");
} else {
    console.log("No lo puedes rentar");
}

//? (||) OR se utiliza cuando se debe  

let esPrime = false;
let descuento = true;

if (esPrime || descuento){
    console.log ("Califica para descuento");
} else {
    console.log("No califica para descuento");
}

//? (!) NOT se utiliza para negar el valor de una condicion

let esDiaLibre = false;

if (!esDiaLibre){
    console.log("se trabaja");
} else {
    console.log("Descansito");
}

//* OPERADORES DE CADENA

//? toLowerCase hace el cambio de nuestro string a minusculas

let mensajeUsuario = "Bienvenidx a la tierra";
let cambioMinusculas = mensajeUsuario.toLowerCase();

console.log(cambioMinusculas);

//? toUpperCase hace el cambio de nuestro string a mayusculas

let saludo = "Casi viernes, casi Navidad";
let cambioMayusculas = saludo.toUpperCase();

console.log(cambioMayusculas);

//trim quita los espacio

let aviso = "     ch35    ";
let sinEspacios = aviso.trim();
console.log(`
${aviso}
${sinEspacios}
`);


//toString convierte un tipo de dato en string

let numero10 = 31;
let cadenas = numero10.toString();
console.log(cadenas);

//? concat

let nombre = "Fernanda";
let apellido = "Ramos";
let nombreCompleto = nombre.concat(" ", apellido);

console.log(nombreCompleto);


/*
! EXPRESIONES
*Expresion aritmetica

let operacion = 14 + 25 * 12; combina la suma con la multiplicacion

*Expresion de cadena

let notificacion = "Casi" + "Anho nuevo"; expresion concatenando

*Expresion logica

 let esMayorDeEdad = (23>18) && (23<65); tiene operadores logicos y de comparacion

*Expresion de asignacion

let frasco = chocolates; asigna el valor a la variable.

*/




