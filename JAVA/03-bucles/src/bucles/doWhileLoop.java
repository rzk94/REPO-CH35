package bucles;

public class doWhileLoop {
	public static void main(String[] args) {
/*
 Ciclo Do While evalua la expresion en la parte inferior del ciclo.
 por tanto, las declaraciones dentro del blo "do" siempre se ejecutan al menos una vez.
 */
	
	// cuenta del 1 a 20
	int cuenta = 5;
	do {
		System.out.println("cuenta "+cuenta);
		cuenta++;
	}while(cuenta < 0); //output 1 ya se ejecuto al menos una vez
	
	
}	
}
