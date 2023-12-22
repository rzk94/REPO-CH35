/*
!-------------PARADIGMAS DE PROGRAMACION-------------------
?   Programacion imperativa: se basa en instrucciones detallas

?   Programacion basada en eventos: se basa en la gestion y respuesta de eventos.

?   Programacion declarativa: Explicar lo que queremos obtener.


?   Programacion orientada a objetos: Toma cierta informacion o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (metodos).

*/


//* Clases: planillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objeto.

class persona {

    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

//*objetos
//*para inicializar un objeto es necesario definir un constructor que tomara los atributos.
//* clases = molde objeto = gomita constructor = chefsitx atributos = ingredientes metodos = comprortamientos

constructor (nombre, apellido, edad, email, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
   }

comer(){
    console.log("Bon apetit");
} //metodo comer

bailar (){
    console.log("Dale hasta el suelo");
} // metodo bailar

mostrarInfo(){
    console.log("Nombre:", this.nombre);
    console.log("Apellido:", this.apellido);
    console.log("Edad:", this.edad);
    console.log("Email:", this.email);
    console.log("Telefono:", this.telefono);
}
}

let usuario1 = new persona("Fernanda", "Ramos", 31, "fer@gmail.com", "5574123647")
let usuario2 = new persona("Eli", "Razo", 29, "eli@gmail.com", "5568181234")
let usuario3 = new persona("Dulce", "Hernandez", 30, "dul@gmail.com", "987654")
let usuario4 = new persona("Mariana", "norecuerdo", 26, "mar@gmail.com", "23456788")
let usuario5 = new persona("Ethan", "Blodd", 23, "eth@gmail.com", "123344567")

console.log(usuario1);//imprimir objeto completo
console.log(usuario4.email);//imprimir un atributo en especifico
console.log(usuario1.email, usuario2.email, usuario3.email);

usuario4.comer();//invocar el metodo
usuario1.mostrarInfo();
console.log(usuario3.telefono, usuario5.apellido);

//* Pilares de la programacion orientada a objetos

/*
*Herencia
*Polimorfismo
*Encapsulamiento
*Abstaccion

*/


// HERENCIA nos permite heredar a clases inferiores para poder optimizar el programa

class arrendadxr extends persona { //subclase

    capacidad = 0;
    costo = 0;
    nombreLugar = "";

    mostrarInfo(){
        console.log("Capacidad", this.capacidad);
        console.log("Costo", this.costo);
        console.log("Nombre del lugar", this. nombreLugar);
    }

}


/*
class arrendadxrGuadalajara extends arrendadxr{
    sub clase nieto
}


*/
//Polimorfismo: tener objetos de diferentes tipo que pueden ser manipulados en comun. Nota: la posibilidad de realizar cambios en distintos objetos.
/*
====Polimorfismo====
Proviene de Poli = muchas, morfismo = formas. Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento.
*/

class producto {
    marca = "";
    precio = 0;

    constructor(marca, precio){
        this.marca = marca;
        this.precio = precio;
    }

    mostrarDescripcion(){
        console.log("Marca ");
        console.log("Precio");
    }


}

let producto1 = new producto("cerave", 85);

//Encapsulamiento ocultar la implementacion de un objeto y solo mostrar los datos necesarios


class arrendador extends persona{//subclase
    capacidad = 0;
    costo = 0;
    nombreLugar = "";

    constructor(name, lastname, age, email, phone, capacidad, costo, nombreLugar){
        super(name, lastname, age, email, phone);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;

    }

    mostrarInfo(){
        console.log("Capacidad", this.capacidad);
        console.log("Costo:", this.costo);
        console.log("Nombre del Lugar", this.nombreLugar);
    }
    
}

/*class arrendarGto extends arrendador{
}*/

//instancear
let arrendador1 = new arrendador("Rocio","Hernandez", 29, "rocio29@gmail.com", 5421788956, 100, 5000, "La hacienda");

console.log(arrendador1);
console.log(arrendador1.costo)
arrendador1.mostrarInfo();


/*
Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificacion. Definir los metodos para inicializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no

Atributos 
Nombre 
Calificacion 

metodos 
imprimirCalificacion 
evaluacion 

la calificacion aprobatoria es de 6 
if para evaluar la calificacion
operadores



para regresar de vacaciones escribir el 5to atributo solido con mis palabras

*/




