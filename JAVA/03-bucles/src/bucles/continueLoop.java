package bucles;

public class continueLoop {

	public static void main(String[] args) {
		
		/*
		 INSTRUCCIONEES DE SALTO
		 continue-- Interrumpe la iteracion del bucle, si se procede una condicion especifica y continua con la siguiente.
		 */
		
		//con continue, ejecutando la sentencia condicional, pero cumpliendo la condicion del bucle for.
		
		
		for (int cliente = 1; cliente <= 20; cliente++) {
			if(cliente ==5) {
				System.out.println("Cliente numero "+cliente+" ganaste!!!");
				continue;
			} System.out.println("Eres el cliente numero "+cliente);
		}

	}

}
