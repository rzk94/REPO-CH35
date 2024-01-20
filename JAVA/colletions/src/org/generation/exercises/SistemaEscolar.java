package org.generation.exercises;


import java.util.ArrayList;
import java.util.Scanner;

//Programa que permite que un usuario agregue nombre y apellido de estudiantes matriculados en una universidad. Posteriomente, muestra la lista de los estudiantes agregados.
/*
 * -- Requerimientos:
 * 		>Utilizar ArrayList
 * 		>Scanner para interarctuar con el usuario y permitir que agregue estudiantes
 * 		>Loop para permitir que se agreguen varios estudiantes (do-while)
 * 		>opcion para salir del loop con la palabrar salir (if-else, diferente, switch)
 * 		>mostrar listas de estudiantes (for-each)
 */

public class SistemaEscolar {
	
	public static void main(String[] args) {
		
		//inicializar un arraylist para guardar estudiantes 
		ArrayList<String> estudiantes = new ArrayList<String>();
		
		//Scanner para el usuario
		Scanner scanner = new Scanner(System.in);
		
		//Loop para permitir agregar usuarios
		String nombreEstudiante; //variable global
		
		do {
			System.out.println("Ingresa el nombre del estudiante. Escribe 'Salir' para finalizar.");
			nombreEstudiante = scanner.nextLine();//invocado local
			estudiantes.add(nombreEstudiante);
		} while(!nombreEstudiante.equals("Salir")
				&&!nombreEstudiante.equals("salir")
				&&!nombreEstudiante.equals("SALIR")); //Siempre que NO se escriba salir el loop se sigue ejecutando
		
		//Mostrar lista de estudiantes for-each
		System.out.println("** Lista de estudiantes:");
		
		for (String estudiante : estudiantes) {
			
			if(!estudiante.equals("Salir")
				&&!estudiante.equals("salir")
				&&!estudiante.equals("SALIR")) {
				System.out.println(estudiante);
			}
			
		}
		
		scanner.close();

		

	}

}
