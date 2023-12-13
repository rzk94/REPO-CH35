/*
**1. Convert Minutes into Seconds.**

Write a function that takes an integer minutes and converts it to seconds.

*Examples*

    convert(5) ➞ 300
    convert(3) ➞ 180
    convert(2) ➞ 120
*/

let min = prompt ("Ingresa los minutos a convertir:");
function seconds (min) {
    return min * 60;
}

document.write(`Los ${min} minutos en segundos son ${seconds(min)}.<br>`);


/*
**2. Return the Next Number from the Integer Passed.**

Create a function that takes a number as an argument, increments the number by +1 and returns the result.

*Examples*
    addition(0) ➞ 1
    addition(9) ➞ 10
    addition(-3) ➞ -2
*/

let num = prompt ("Ingresa un numero:");
function masUno (num) {
    return num + 1;
}

document.write(`Ingresaste el numero ${num},  mas uno es igual a ${masUno(num)}.<br>`);



/*
**3. Area of a Triangle.**

Write a function that takes the base and height of a triangle and return its area.

*Examples*

    triArea(3, 2) ➞ 3
    triArea(7, 4) ➞ 14
    triArea(10, 10) ➞ 50
*/

let b = prompt ("Ingresa la base:");
let h = prompt ("Ingresa la altura:");

function areaT (b,h) {
    return  b * h / 2;
}

document.write(`El area de un triangulo con base ${b} y altura ${h} es ${areaT(b,h)}.<br>`);



/*
**4. Convert Age to Days.**

Create a function that takes the age in years and returns the age in days.

*Examples*

    calcAge(65) ➞ 23725
    calcAge(0) ➞ 0
    calcAge(20) ➞ 7300
*/

let age = prompt ("Ingresa tu edad:");

function dias (age){
    return age * 365;
}

document.write(`Tu edad de ${age} años, son ${dias(age)}.<br>`);




/*
**5. Power Calculator.**

Create a function that takes voltage and current and returns the calculated power.

*Examples*

    circuitPower(230, 10) ➞ 2300
    circuitPower(110, 3) ➞ 330
    circuitPower(480, 20) ➞ 9600
*/

let volt = prompt("Ingresa el voltage: ");
let current = prompt("Ingresa la corriente: ");

function power (volt, current){
    return volt * current ;
}

document.write(`La potencia resultante en un circuito con un voltaje de ${volt} y corriente ${current} es de ${power(volt,current)} watts.<br>`);


/*
**6. Return Something to Me!.**

Write a function that returns the string "something" joined with a space " " and the given argument a.

*Examples*

    giveMeSomething("is better than nothing") ➞ "something is better than nothing"
    giveMeSomething("Bob Jane") ➞ "something Bob Jane"
    giveMeSomething("something") ➞ "something something"
*/

let text = prompt("Ingresa un palabra o frase: ");

function textSomething (text){
    return "Something " + text; 
}

document.write(`${textSomething(text)}.<br>`);

/*
**7. Sum of Polygon Angles.**

Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

*Examples*

    sumPolygon(3) ➞ 180
    sumPolygon(4) ➞ 360
    sumPolygon(6) ➞ 720

*/

let nlados = prompt("Ingresa el numero de lados del poligono: ");

function sumAng (nlados){
    return 180 * (nlados - 2 ) ;
}
document.write(`La suma de los angulos internos de un poligono con ${nlados} lados es ${sumAng(nlados)}.<br>`)


/*
**8. Convert Hours and Minutes into Seconds.**

Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

*Examples*

    convert(1, 3) ➞ 3780
    convert(2, 0) ➞ 7200
    convert(0, 0) ➞ 0

*/


let hours2 = prompt("Ingresa cantidad de horas: ");
let min2 = prompt("Ingresa cantidad de minutos: ");

function conversionHM (hours2,min2){
    return ((hours2)*60) + ((min2)*60);
}
document.write(`La suma en segundos de ${hours2} horas y ${min2} minutos es de ${conversionHM(hours2,min2)}.<br>`);