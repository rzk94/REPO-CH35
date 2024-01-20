package org.genration.collections;

import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		HashSet<String> animals = new HashSet<String>();
		
		animals.add("Perro");
		animals.add("Caballo");
		animals.add("Capibara");
		animals.add("Cebra");
		animals.add("Jirafa");
		animals.add("Ornitorrico");
		animals.add("Gato");
		
		//Imprimir el HashSet
		System.out.println(animals);
		
		//Conocer si un elemento se encuentra dentro del set: contains();
		System.out.println(animals.contains("Capibara"));
		
		//Eliminar un elemento: remove();
		animals.remove("Cebra"); //Elimino
		System.out.println(animals);//imprimo con elemento eliminado
		
		//agregando elementos en una sola linea
		animals.addAll(Arrays.asList("Perrito","Osito","Nahual"));
		System.out.println(animals);
		
		/*
		 * La clase HashSet no va a garantizar que los elementos se muestren segun el orden establecido ya que busca eficientar la busqueda y recuperacion de los elementos.
		 * utiliza tablas hash para almacenar los elementos y mostrarlos al usuario 
		 */
		
		
		//limpiar el hashset: .clear();
		animals.clear();
		System.out.println(animals);
		
		
		
	}

}
