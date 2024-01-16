package operadoresLogicos;

public class ejerciciosOperadores {

	public static void main(String[] args) {
		
		/*
		 && operador And  devuelve true si ambas expresiones son verdaderas 
		 || operador or devuelve true si almenos una de las dos condiciones se cumple
		 ! operador not si la expresion booleana es flase devuelve true y viceversa 
		*/
		
		// && and
		
		int anhos = 5;
		boolean esInfante = true;
		boolean costoInfante = anhos <= 12 && esInfante;
		System.out.println("Es peque "+costoInfante);
		
	
		
		String cliente = "Cliente123";
		String credenciales = "fertakisfuego123";
		
		boolean credencialCorrecta = cliente.equals("Cliente123")&& credenciales.equals("fertakisfuego123");
		System.out.println("Las credenciales si son validas "+credencialCorrecta);

		// || or 
		
		double costoPasaje = 380.5;
		int edad = 58;
		boolean credenInapam = false;
		
		boolean descuentoAdultoMayor = edad >= 60 || credenInapam;
		
		System.out.println("Tiene descuento? "+costoPasaje);
		
		// ! not
		
		boolean asientosDisponibles = true;
		boolean disponibles = true;
		boolean asientosConDescuento= !disponibles;
		
		System.out.println("Tenemos asientos con descuento "+ asientosConDescuento);
		
	}

}
