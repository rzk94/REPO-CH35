package org.generation.iterable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class IterableMain {
	public static void main(String[]args) {
		//podemos iterar sobre una coleccion de 3 maneras:
		//1. iteracion mediante ciclo for-each
		List<String> nombres = new ArrayList<String>();
		
		nombres.addAll(Arrays.asList("Eli","Ana","Arturo","Ruben","Yonuel","Marco"));
		
		for (String nombre : nombres) {
			System.out.println(nombre);
		}
		
		//2. Iterar mediante Iterador
		List<String> apellidos = new ArrayList<String>();
		
		apellidos.addAll(Arrays.asList("Aleman", "Garcia","Razo", "Martinez" ));
		
		//Utilizar un nuevo iterador y le vamos a pasar el motodo .iterator() a nuestro ArrayList
		Iterator<String> iterador = apellidos.iterator();
		
		//Utilizar hile, devuelve verdadero si la iteracion tiene mas elementos, si no, se termina el ciclo
		while (iterador.hasNext()) {
			String elemento = iterador.next();
			System.out.println(elemento);
		}
		
		//3. Mediante forEach que toma una expresion Java Lambda como parametro.
		System.out.println("*******Lambda********");
		List<String> animales = new ArrayList<String>();
		
		animales.addAll(Arrays.asList("Cuyo", "Nahual", "Tlacuache", "Ajolote", "Tepezcuincle"));
		
		animales.forEach((animal)->{
			System.out.println(animal);
		});
		
		
	}
	

}
