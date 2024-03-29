package org.genration.collections;

import java.util.ArrayList;
import java.util.Collections;

public class SortMethod {

	public static void main(String[] args) {
		//El metodo .sort() permite ordenar los elementos de un arraylist
		
		ArrayList<Integer> points = new ArrayList<Integer>();
		ArrayList<String> names = new ArrayList<String>();

		points.add(5);
		points.add(7);
		points.add(6);
		points.add(10);
		points.add(9);
		points.add(8);
		
		System.out.println(points); // no estan ordenados de mayor a menor
		//Ordenamiento
		Collections.sort(points);
		System.out.println(points);
		
		names.add("Daniel");
		names.add("rocio");
		names.add("Arturo");
		names.add("Eveida");
		names.add("fenanda");
		names.add("angel");
		System.out.println(names);
		//ordenamiento
		Collections.sort(names);
		System.out.println(names);//ordena con base tabla ASCII
	}

}
