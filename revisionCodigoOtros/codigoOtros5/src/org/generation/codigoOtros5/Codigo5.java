//Elizabeth Razo
/*
 * 4
 * 4
 * 4
 * 4
 * 5
 */

package org.generation.codigoOtros5;
import java.util.Scanner; //importar scanner
public class Codigo5 {
//agregar main
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);// refactorizar s por scan y agregar System.in
		
		// inicializar variables
		int numero = 0;// refactorizar ni a int numero, no string
		int numeroHolder = 0;// refactorizamos la variable c -> numeroHolder
		int afo = 0;
		int noAfo = 0;
		int digito = 0;// variable general, no local
		
		System.out.println("Instroduzca un numero");//println para que sea en una linea independiente
		numero = Integer.parseInt(scan.nextLine());
		numeroHolder = numero;
		scan.close();//cerrar el scanner
		
		while (numero > 0) {
			digito = (int) (numero % 10); // sin el int inicial 
			System.out.println("Digito: "+digito);
			if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
				afo++;
			} else {
				noAfo++;
			}
			numero /= 10;// esta condicion fuera del else para no crear bucle infinito
		}
		if (afo > noAfo) {// fuera del while para mostrarse al final
			System.out.println("El " + numeroHolder + " es un número afortunado.");//corregir println
		} else {
			System.out.println("El " + numeroHolder + " no es un número afortunado.");
		}
	}//main
	
}//class
