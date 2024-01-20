package org.genration.collections;
import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListCollections {

	public static void main(String[] args) {
		//***************Arrays*************//
		String[]names= {"Jhonatan","Gonzalo","Fernanda","Lizbeth","Arturo","Uriel","Martin","Lucero"};
		
		//Imprimiendo Arrays
		//System.out.println(names);
		System.out.println(Arrays.toString(names));
		
		int [] edades = {12,3,25,25,55,69,41,29,37,18};
		System.out.println(Arrays.toString(edades));

		//Accedes a cada elemento del Array
		String name1 = names[0];
		System.out.println("El primer nombre de la lista es "+name1);
		int edad1 = edades[2];
		System.out.println("La edad de "+name1+" es de "+edad1+" años.");
	
		//Obtener la longitud del Array
		int longitudNames = names.length;
		System.out.println("El Array names tiene "+longitudNames+" elementos");
		
		//obtener el ultimo elemento
		//String ultimoElemento = names[longitudNames -1];//La longitud ya viene en la variable logitudNames
		
		String ultimoElemento = names[names.length-1];//la longitud ya viene en la variable longitudNames
		System.out.println("El ultimo elemento del Array names es "+ultimoElemento);//Lucero
		
		
		//Mostrar cada elemento utilizando forEach
		for (String name:names) {
			System.out.println(name);
		}
		
		//**************************ArrayList*******//
		//ArrayList es un array que puede cambiar de tamanho. es la clase de Java que representa la estructura de datos de arrays. Permite elementos duplicados y recibe varios metodos para su manipulacion
		ArrayList<String> films = new ArrayList<String>();
		ArrayList<Integer> matricula = new ArrayList<>(); //Wrapper class
		ArrayList<Character> Character = new ArrayList<>();
		
		//Agregar elementos
		films.add("Inception");
		films.add("se7en");
		films.add("pulp fiction");
		films.add("mr nobody");
		films.add("the shiter island");
		films.add("ready player one");
		
		System.out.println(films);
		
		//Imprimiendo un solo elemento
		String film1 = films.get(0);
		System.out.println(film1);
		
		//modificar un elemento .set(index,newValue)
		films.set(0, "Elemento modificado");
		System.out.println(films.get(0));
		
		//conocer el tamaño del araylist size();
		int filmsSize = films.size();	
		System.out.println("tamaño: "+filmsSize);
		
		//Agregar y eliminar elemento
		films.add("para eliminar");
		System.out.println(films);
		films.remove(films.size()-1);
		System.out.println(films);
		
	
	
	}

}
