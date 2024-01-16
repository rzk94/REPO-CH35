package ejecicioAutobus;

public class autobusOaxaca {

	public static void main(String[] args) {
		
		String destino = "Oaxaca";
		double costoPasaje = 350;	
		int asientosTotal = 62;
		int asientosInapam = 4;
		int asientosEstudiante = 6;
		
		// Datos de pasajero 
		int edad = 35;
		boolean credenInapam=false;
		boolean credencialEstudiante=true;
		
		
		//Evaluar deescuentos
		boolean descuentoInapam = edad >= 60 && credenInapam ;
		boolean descuentoEstudiante = edad < 60 && credencialEstudiante;
		
		
		System.out.println("El destino es "+destino);
		System.out.println("El costo del pasaje entero es " + costoPasaje);
		System.out.println("La capacidad total de pasajeros es de " + asientosTotal + " pesonas");
		
		
		//Aplicar a deescuentos
		if (descuentoInapam && (asientosInapam >=1)) {
			System.out.println("El descuento de INAPAM es del 35%");
			System.out.println(String.format("El total a pagar es %.2f",(costoPasaje*0.65)));
			System.out.println("Asientos INAPAM disponibles: "+(asientosInapam-1));
			
		}
		if (descuentoEstudiante && (asientosEstudiante >=1)) {
			System.out.println("El descuento de estudiante es del 30%");
			System.out.println(String.format("El total a pagar es %.2f",(costoPasaje*0.7)));
			System.out.println("Asientos para estudiantes disponibles: "+(asientosEstudiante-1));
		}
		
		
	
		

	}

}
