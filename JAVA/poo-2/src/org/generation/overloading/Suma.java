package org.generation.overloading;

import java.math.BigDecimal;

public class Suma {
	//Metodos llamados sumar que reciban dos parametrosint
	
	static int sumar (int num1, int num2) {
		return num1 + num2;
	}
	
	static double sumar (double num1, double num2) {
		return num1 + num2;
	}
	
	//Crear un tercer metodo  llamado sumar de tipo BigDecimal
	static BigDecimal sumar(BigDecimal num1, BigDecimal num2) {
		return num1.add(num2);//Metodo BigDecimal de suma 2 numeros
		
	}
}
