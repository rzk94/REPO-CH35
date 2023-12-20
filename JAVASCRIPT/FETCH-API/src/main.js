//Programacion sincronica
function two () {
    console.log("dos");
}

function one () {
    console.log("uno");
    two();
    console.log("tres");
}

one();
console.log("************************");
//Programacion asincrona.
//setTimeout que recibe una funcion anonima y establece un tiempo de ejecucion para cumplir con la condicion de asinconismo

// const twoAsync = () => {
//     setTimeout( () => {
//         console.log("dos Async")
//     },5000);
// }


// const oneAsync = () => {
//     setTimeout(function() {
//     console.log("uno Async");
//     }, 3000);
//     twoAsync();
//     console.log("tres Async");
// }

// oneAsync();


/**
 *!Trabajando con promesas mediante Fetch API
 */

 const url = "https://jsonplaceholder.typicode.com/users";

 fetch(url)
 //Si se cumple la promesa, vamos a traer los datos de la API y se convertira en tipo json para poder mostrarlos en consola
 .then(data => data.json())//mostrando en la consola todos los usuarios de la API
 .then(data => {
    console.log(data); //Mostrando en consola todos los usuarios de la api
    console.log(data[0].name);//mostrando en consola el usuario 0 y trayendo solo su nombre
 })
 .catch(erro => console.error("ups!, algo salio mal", error)); //mensaje de error
