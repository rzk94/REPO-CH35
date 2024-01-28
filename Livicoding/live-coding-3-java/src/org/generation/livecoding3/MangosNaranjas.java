//Elizabeth Razo
/*
 * 3
 * 3
 * 3
 * 3
 * 4
 */

package org.generation.livecoding3;

import java.util.Scanner;

public class MangosNaranjas {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		int mangos=0;
		int naranjas=0;
		System.out.println("Cantidad de mangos: ");
		mangos= Integer.parseInt(scan.nextLine());
		System.out.println("Cantidad de naranjas: ");
		naranjas= Integer.parseInt(scan.nextLine());
		scan.close();
		System.out.println(CajasMangosyNaranjas(mangos, naranjas));
		
	}// MAIN

	public static String CajasMangosyNaranjas(int mangos,int naranjas) {
		String mensaje = "";
		int divisor = 0;
		int mangosEnCajas =0;
		int naranjasEnCajas =0;
		
		if(mangos>naranjas) {
			divisor = mangos;
		}else {
			divisor = naranjas;
		}
		while(divisor-->1) {
			if(mangos%divisor==0 && naranjas%divisor==0) {
				break;
			}
		}
		
		mangosEnCajas = mangos/divisor;
		naranjasEnCajas = naranjas/divisor;
		
		mensaje = "El número de cajas es: "+divisor+". El número de mangos en una caja es: "+mangosEnCajas+". El número de naranjas en una caja es: "+naranjasEnCajas;
		
		return mensaje;
	}

}//CLASS
