//Elizabeth Razo
/*
 * 4
 * 4
 * 4
 * 4
 * 5
 */
package org.generation.liveCoding4;

public class FizzBuzz {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int Num = 100;
		NumCheck(Num);
	}//main
	
	public static void NumCheck(int numbers) {
		for (int i=1;i<=numbers;i++) {
			if((i%3==0)&&(i%5==0))
				System.out.println("FizzBuzz");
			else if(i%3==0)
				System.out.println("Fizz");
			else if(i%5==0)
				System.out.println("Buzz");
			else
				System.out.println("N. "+i);
		}
	}//metodo

}//class
