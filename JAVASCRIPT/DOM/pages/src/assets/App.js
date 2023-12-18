const botonRandom = document.getElementById("btn");
const botonReset = document.getElementById("reset");
const colorFondo = document.body.style.backgroundColor;

//Vamor a declarar una funcion que genera un numero random tomando un parametro

const random = (number) => {
    return Math.floor(Math.random()*(number+1));
}

// Crear evento de click para que cuando presione un boton pase algo

//random
botonRandom.addEventListener("click", ()=>{
    const randomColor = `rgb(${random(255)},${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColor
})

// reset
botonReset.addEventListener("click", () =>{
    document.body.style.background = colorFondo;
});
