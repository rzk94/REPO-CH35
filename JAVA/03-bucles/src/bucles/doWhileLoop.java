package bucles;
import java.util.Scanner;
public class doWhileLoop {
	public static void main(String[] args) {
/*
 Ciclo Do While evalua la expresion en la parte inferior del ciclo.
 por tanto, las declaraciones dentro del blo "do" siempre se ejecutan al menos una vez.
 */
	
	/*
		
	// cuenta del 1 a 20
	int cuenta = 5;
	do {
		System.out.println("cuenta "+cuenta);
		cuenta++;
	}while(cuenta < 0); //output 1 ya se ejecuto al menos una vez
	
	*/
	
	
	/*
	 * Crear un programa para un cajero bancario
	 * - El programa me mostrará 4 opciones:
	 * 1. Consultar saldo
	 * 2. Ingresar dineros
	 * 3. Retirar dineros
	 * 4. Salir
	 * - Mostrar mensaje de bienvenida al usuario, darle contexto y solicitar que elija una opción (número)
	 * - Mostrar al usuario la opción que eligió y permitir que elija otra opción
	 * - El usuario puede salir del programa escribiendo 4 (salir)
	 */
	
	System.out.print("Bienvenido al cajero Generation Bank, elija alguba de nuestras opciones disponibles:\n"
			+ " 1. Consultar saldo\n"
			+ "	2. Ingresar dineros\n"
			+ "	3. Retirar dineros\n"
			+ "	4. Salir");
	
	Scanner scr = new Scanner (System.in);
	int opcion;
	
	do {
		opcion = scr.nextInt();
	
		switch(opcion) {
		case 1: System.out.println("Consultar saldo");
		break;
		case
		2: System.out.println("Ingresar dineros");
		break;
		case 3: System.out.println("Retirar dineros");
		break;
		case 4: System.out.println("Gracias por elegir Generation Bank. No olvide tomar su dinero y su tarjeta.");
		break;
		default:
			System.out.println("Por favor, elige una opcion valida de nuestro menu.");
		}
	}while (opcion !=4);
	
	
	scr.close();
	
	
}	
}
