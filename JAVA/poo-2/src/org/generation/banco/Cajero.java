package org.generation.banco;

	/*
	 * En cajero se instancia el objeto de tipo cueentabancaria y se invocan los metodos definidos
	 * Aqui si se pueden establecer los try-catch de la excepcion que se definio en el metodo retirar
	 * los resultados se muentran en consola
	 */
	
	public class Cajero{
		public static void main(String[]args) {
			CuentaBancaria cuentaDaniel = new CuentaBancaria(4152); //cuenta bancaria con su idCuenta
			//simulamos que tenemos un Scanner y el cliente introduce dinero
			System.out.println("Depositando $500");
			cuentaDaniel.depositar(500);
			
			//Revisar si se actualiza el saldo (debe haber 500 pesitos)
			System.out.println("el nuevo saldo es de $"+ cuentaDaniel.getSaldo());
			
			//retirando dinero
			try {
				//simulamos nuevamente el Scanner para retirar
				System.out.println("retirando $300");
				cuentaDaniel.retirar(300);
				System.out.println("El nuevo saldo es de $"+cuentaDaniel.getSaldo()); //output 200
				
				System.out.println("retirando $200");
				cuentaDaniel.retirar(200);
				System.out.println("El nuevo saldo es de $"+cuentaDaniel.getSaldo()); //output 0
				
				System.out.println("retirando $300");
				cuentaDaniel.retirar(300);
				System.out.println("El nuevo saldo es de $"+cuentaDaniel.getSaldo()); //output Exception
				
			} catch (FondosInsuficientesException e) {
				System.out.println("\u001B[31mLo siento, te faltan $\u001B[31m" + e.getMonto());
				//syso ctrl+space
				//syso ctrl+space
				
				e.printStackTrace(); //Método de excepciones que imprime el seguimiento del flujo de la excepción
				
			}
		
		
		}
	
}
	
