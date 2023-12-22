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

 //* Usando fetch para mostrar en navegador
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");
//* Variable para guardar la informaicon que se va a traer desde la API: Debe de ser de tipo null
let post = null;
//* Consumiendo API con fetch (promesas)
botonInfo.addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/users/6")
        .then(response => response.json())
        .then(response => {
            post = response;
            //* Guardo los datos de response en la variable de tipo null, para modificar el dato
            //* Mandamos a llamar la variable desde la funcion
            mostrarDatos(response);
        })
        .catch(error => console.error("algo malio sal",error));
});


//* Funcion que me permita manipular la variable de tipo null
const mostrarDatos = (post)=>{
    //*Creando nodos (elementos) mediante DOM Manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");
    //*Ponerlos en el HTML (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;
    //*Hacer que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
};

//* Usando fetch para mostrar en navegador MOSTRAR PRODUCTOS
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener("click", () => {
    fetch ("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(response => {
        productos = response
        mostrarProductos(productos);
    })
    .catch(error => console.error("cuidado", error))
});

//Funcion para crear, agregar y mostrar elementos desde el DOM
const mostrarProductos = (productos) => {
    //mando a llamar las llavestitle,price, description, category, image desde la API
    productos.map((productos) => {
        //El método map toma el array (objeto en JS) y crea nuevos arreglos que se pueden manipular de manera individual. Así, evitamos el uso de un ciclo forEach
    const imagen = document.createElement("img");
    const titulo = document.createElement("h2");
    const precio = document.createElement("h3");
    const descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const separador = document.createElement("hr");
    
    //Enviar a HTML con innerHTML
    imagen.src = productos.image;
    imagen.width = 200;
    titulo.innerHTML = productos.title;
    precio.innerHTML = productos.price;
    descripcion.innerHTML = productos.description;
    categoria.innerHTML = productos.category;

    //mostralos en el navegador al agregarlos a su padre
    tienda.appendChild(imagen);
    tienda.appendChild(titulo);
    tienda.appendChild(precio);
    tienda.appendChild(descripcion);
    tienda.appendChild(categoria);
    tienda.appendChild(separador);
    })
}
//Metodo..
fetch("https://jsonplaceholder.typicode.com/posts", {

    method: "POST",
    body: JSON.stringify({
        userId:1986,
        title:"Suenha los androides con ovejas electricas?",
        body: "Author: Phillipe K. Dick"
    }),
    headers: {
        "content-type": "application/json; charset=UTF-8"
    
    }
    
})//fin de mi fetch
// inicio de mis promesas
.then(response => response.json())
.then(response => {
console.log(response)
})

/* >>>>>>>>>>>>> Programacion asincrona (promise) <<<<<<<<< */
// funcion flecha de tipo async-await
const getUser = async () =>{
    //Para que se cumpla la promesa, no utilizar then, sino que usamos try. Para errores, se sigue utilizando catch
    try{
        //retardo para que se  ejecute de manera asicrona. tengo que crea una nueva promesa, que recibe un setTimeout
        await new Promise(resolve => setTimeout(resolve,3000));

        //mi promesa que se ejecuta 
        const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error("Error inexplicable",error);
    }
}
//invocar funcion, por favor, que no se nos olvide
getUser();

//! <<<<<<<<<<<<< LocalStorage >>>>>>>>>>>>>>>>>>
//Nos permite crea, modificar, eliminar, guardar objetos de JavaScri de manera local (en el equipo)
//crea un objeto de JS con sus llaves y valores
const user = [
{
    id: 1,
    name: "Daniel",
    apellido: "Maldonado",
    email: "danieldlcm@idr.com",
    posicion: "instructor",
    empresa: "Generation"
},
{
    id: 2,
    name: "Diana",
    apellido: "Alvarez",
    email: "diana.alv@gmail.com",
    posicion: "java dev",
    empresa: "cofepris"
}
]
//convertir en el objeto creado a notacion JSON y almacenarlo en el localStorage
localStorage.setItem("usuario", JSON.stringify(user));

//Traer el objeto desde el localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);
console.log(`${user[1].name} con posicion ${user[1].posicion}, trabaja en ${user[1].empresa}`);

//sessionStorage


