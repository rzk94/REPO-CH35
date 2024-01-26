package org.generation.overloading;

import java.math.BigDecimal;

public class SumaMain {
	public static void main(String[] args) {
		//Invocamos los metodos static mediante su clase y no mediante la instancia de un objeto
		int suma1= Suma.sumar(8, 5);
		double suma2= Suma.sumar(4.3, 6.26);
		
		//Para imprimir BigDecimal debemos guardar los valores de los parametros en objetos tipo BigDecimal y asignarlos comoa argumentos     string en cada nueva instancia
		
		BigDecimal num1= new BigDecimal ("4.3");
		BigDecimal num2= new BigDecimal ("6.26");
		
		//Llamar los objetos instanciados con los parametros de BigDecimal
		BigDecimal suma3= Suma.sumar(num1, num2);
		
		System.out.println("La suma de enteros da: " + suma1);
		System.out.println("La suma de decimales da: " + suma2);
		System.out.println("La suma de BigDecimal da: " + suma3);
	}
}
