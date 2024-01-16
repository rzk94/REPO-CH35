package bucles;

public class loops {

	public static void main(String[] args) {
		/*
		 El ciclo for nos proporciona una forma compacta de iterar sobre valores.
		 for (inicializacion; condicion;contador)
		 
		 (incremento/decremento){
		 bloque de codigo}
		 
		 */
		
		
		/*
		//for con variable local
		for (int numero = 0; numero <= 10; numero++) {
			System.out.println("Numero es igual a "+numero);
		}
		
		//for con variable global
		int contador;
		for (contador= 1; contador <= 5; contador++) {
			System.out.println("La cuenta es "+contador);
		}
		
		*/
		
		
		//Bucles anidados - bucle dentro de otro bucle
		//imprimir un triangulo con asteriscos
		
		int filas = 5;
		for (int i=0; i< filas; i++) {
			//bloque de codigo que va iterar con el bucle
			for (int j=0;j<=i;j++) {
				System.out.print("*");
			}
			System.out.println();
		}
		
		
		
	}

}
