package org.generation.banco;

//En esta clase se definen los metodos que arrojan Excepciones, siempre que en la clase cajero se dispare dicha 
/*
 * Requerimientos
 * 1.Trabajar bajo el paradigma POO
 * 2.Indicar que la clase es una Exception
 * 3. Crear variables y metodos para instanciar objetos.
 * 4.Encapsular
 * 
 */


public class FondosInsuficientesException extends Exception {
	private static final long serialVersionUID = 1L; //No es necesaria pero es buena practica asignarla
	//atributos	
	private double monto;
	
	//constructor
	public FondosInsuficientesException(double monto) {
		this.monto=monto;
	}
	
	//Getter y setter
	public double getMonto() {
		return monto;
	}
	
	public void setMonto(double monto) {
		this.monto = monto;
	}
	

}
