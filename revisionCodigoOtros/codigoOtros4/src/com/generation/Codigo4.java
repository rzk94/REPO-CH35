/*Elizabeth Razo
  * 5
  * 5
  * 5
  * 5
  * 5
*/


package com.generation;

import java.util.Scanner; //importamos Scanner

public class Codigo4 {
	
	public static void main(String[] args) { // creamos el metodo main

		Scanner mano = new Scanner(System.in); //agregar System.in para indicar que lo que se escribe entra al sistema y refactorizamos s por mano
	    
	    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
	    String j1 = mano.nextLine();
	    
	    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");// se corrije el texto a jugador 2
	    //Scanner s2 = new Scanner(); //este scanner esta repetido, no es necesario
	    String j2 = mano.nextLine();
        
	    if (j1 == j2) {
	      System.out.println("Empate");
	    } else {
	      int ganador = 2; //refactorizar g por ganador
	      switch(j1) {
	        case "piedra":
	          if (j2.equals("tijeras")) { //por el tipo de dato string no es valido usar ==
	            ganador = 1;
	          }

	        case "papel":
	          if (j2.equals("piedra")) {
	            ganador = 1;
	          } //faltaba cerrar el if
	        
	        case "tijeras"://acompletar la palabra tijeras
	          if (j2.equals("papel")) {
	            ganador = 1;
	          }
	          break;
	        default:
	      }
	      System.out.println("Gana el jugador " + ganador);
	    }
		
        mano.close(); // Cerrar el objeto Scanner
		
	} // main
	 	
}// class

	 
	
	

