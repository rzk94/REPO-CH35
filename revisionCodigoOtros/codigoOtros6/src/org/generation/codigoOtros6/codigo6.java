//Elizabeth Razo
/*
 * 3
 * 3
 * 3
 * 3
 * 4
 */


package org.generation.codigoOtros6;

import java.util.Scanner; //scanner

public class codigo6 {
//crear main
	public static void main(String[] args) {
		// variables a ocupar
		int[] nums = new int[20];// refactorizar n por nums y agregar palabra reservada new
		int option = 0;
		int multiple = 0;
		Scanner scan = new Scanner(System.in);

		// primero solicitar datos
		System.out.println("\n¿Qué números quiere resaltar? ");// corregir .println
		System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");
		option = Integer.parseInt(scan.nextLine());// cerrar un parentesis, no se puede usar console(), debe ser Scanner para leer el valor ingresado.

		multiple = (option == 1) ? 5 : 7; // corregir condicional, estaba mal ordenado

		aleatoryNumbers(nums);// faltaba una funcion para generar numeros aleatorios

		compareNumber(nums, multiple);// metodo para comparar los multiplos
	}//main

	private static void compareNumber(int[] numbers, int multiple) {
		for (int number : numbers) {// tipo int en vez de char, for() en vez de foreach(),  refactorizar e por number
			if (number % multiple == 0) {
				System.out.print("[" + number + "] ");
			} else {// sacar else del if
				System.out.print(number + " ");// out para imprimir el mensaje
			}
		}
	} //compareNumber

	private static void aleatoryNumbers(int[] numbers) {
		for (int i = 0; i < numbers.length; i++) {//  ++ para incrementar el valor, en vez de 20, que sea por el tamanho del arreglo
													
			numbers[i] = (int) (Math.random() * 381) + 20; 
			System.out.print(numbers[i] + " ");// agregar out
		}

	} //aleatoryNumbers
	
}//class
