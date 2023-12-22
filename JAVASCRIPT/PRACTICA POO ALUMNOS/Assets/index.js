/**
 * Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificacion. Definir los metodos para incializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no.
 * Atributos:
 * nombre
 * calificacion
 * 
 * Metodos 
 * imprimirCalificacion
 * evaluacion
 * 
 * la calificacion aprobatoria es de 6
 * if para evaluar la calificacion
 */



//!     Se declara la clase alumno
class alumno { 
    //!     Se declaran atributos
    nombre = ""; // atributo tipo string
    calificacion = 0; // atributo tipo numero

    //!     Se declara al constructor y dentro sus atributos
    constructor (nombre, calificacion){
        this.nombre = nombre;   // se da el emento nombre al atributo nombre
        this.calificacion = calificacion;  // se da el emento calificacion al atributo calificacion
    }

    //!     Se declaran los metodos

    imprimirCalificacion(){ //Primer metodo, para imprimir en consola
        console.log(`La calificacion de ${this.nombre} es de ${this.calificacion}`);
    }

    evaluacion(){   // segundo metodo, para evaluar la calificacion
        const evaluacion = this.calificacion >= 6 ? "Aprobade":"Reprobade";
        console.log(`Por lo que ${this.nombre} esta ${evaluacion}`);
    }

}

//!     Crear objetos o instancias de la clase
const alumno1 = new alumno("Elizabeth", 9);
const alumno2 = new alumno("Fulanito", 6);
const alumno3 = new alumno("Perengano", 5.9);


//!     Imprimir en consola
alumno1.imprimirCalificacion(); // constante alumno1 + el metodo imprimirCalificacion
alumno1.evaluacion();// constante alumno1 + el metodo evaluacion

alumno2.imprimirCalificacion();
alumno2.evaluacion();

alumno3.imprimirCalificacion();
alumno3.evaluacion();