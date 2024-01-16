package tipodeDatosyVariables;

public class EjerciciosdeDatos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Hola Mundo!");
		
		/*comentarios
		 * multilinea
		 */
		
		//comentarios de una sola linea
		
		byte edad = 15; //sirve para representar un numero entero 8bits (-128 al 127)
		
		System.out.println("Edad del participante "+edad);
		
		short usuariosNuevos = 200; //Sirve para representar un numero entero 16 bits (-23768 al 32767)
		
		System.out.println("Usuarixs nuevos " +usuariosNuevos);
		
		int usuariosTotales = 8752;// sirve para representar un numero entero 32 bits (-2147483648 al 2147483647)
		
		System.out.println("Usuarios Totales "+usuariosTotales);
		
		long usuariosPremium = 9512; //Sirve para presentar un numero con valores mucho mayores
		
		System.out.println("Usuarios premium "+usuariosPremium);
		
		//Tipos de datos con numero decimales 
		
		float altura = 1.61f;//Sirve para representar un valor numerico con numeros decimales, cuyo valor es de 23 bits, puede tener 8 caracteres despues del punto decimal y que tiene que llevar una f al final
				
		System.out.println("Altura del usuarix "+altura);
				
		double peso = 68.800;//Sirve para representar valores numericos con decimales, cuyo valor es de 64 bits y puede tener hasta quince caracteres despues del punto decimal
		
		String costoBoleto= "500"; // Es una clase para tener cadenas de texto
		String zonaBoleto = "52";
		System.out.println("Usuarix "+costoBoleto);
		System.out.println("Zona a la que pertenece "+zonaBoleto);
		
		char section = 'f';//Sirve para representar valores con un solo caracter
		
		System.out.println("Seccion "+section);
		
		boolean clienteFrecuente = true; //Sirve para obtener true o false utilizando condicionales
			
		System.out.println("Es un cliente frecuente "+clienteFrecuente);
		
		
		//Conversion de tipos
		
		//Casteo a entero
				
		int pesoCambio = (int) peso;
		
		//Casteo entero
		long pesoCambio1 = (long) peso;
		
		System.out.println("double "+peso);
		System.out.println("int "+pesoCambio);
		System.out.println("long "+pesoCambio1);
		
		int nombreCambio = Integer.parseInt(costoBoleto);
		double zonaCambio = Double.parseDouble(zonaBoleto);
		
		System.out.println("Zona del usuarix segun su boleto "+(nombreCambio * zonaCambio));
	
		
		/*
		 > mayor que
		 < menos que
		 >= mayor o igual que
		 <= menos igual que
		 */
		
		//programa para un cine
		
		double precioEntrada = 75.5;
		double precioPalomitas = 89.7;
		double precioBebida = 35.5;
		int capacidadTotal = 500;
		
		int personasDentro = 342;
		
		if (personasDentro > capacidadTotal) {
			System.out.println("Aforo lleno");
		}
		
		double totalEntrada = personasDentro * precioEntrada;
		double totalPalomitas = personasDentro * precioPalomitas;
		double totalBebidas = personasDentro * precioBebida;
		
		System.out.println("Total de personas "+ personasDentro);
		System.out.println("Total de entradas "+ precioEntrada);
		System.out.println("Total de palomitas "+ precioPalomitas);
		System.out.println("Total de bebidas "+ precioBebida);
				
		
		
	
	}

}
