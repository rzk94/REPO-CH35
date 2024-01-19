package funciones;
import java.util.Scanner;
public class funcionDescuento {

	public static void main(String[] args) {
		Scanner scanner = new Scanner (System.in);
		
		System.out.println("Ingrese el costo del producto $");//obtener el precio
		double precioProducto = scanner.nextDouble();
		
		double porcentajeDescuento = 35;
		double descuento = calcularDescuento(precioProducto, porcentajeDescuento);
		
		double porcentajeImpuesto = 16;
		/*
		double impuesto = calcularImpuesto(precioProducto, porcentajeImpuesto);
		*/
		double impuesto = calcularDescuento(precioProducto, porcentajeImpuesto);
		
		double total = calcularTotal(precioProducto, descuento, impuesto);
		
		total= redondear(total,2);
		
		System.out.println(
				"Precio del producto $"+precioProducto+"\n"
				+"Descuento aplicado al producto $"+descuento+"\n"
				+"Impuesto aplicado $"+impuesto+"\n"
				+"Total a pagar $"+total
				);
		
	}
	
	static double calcularDescuento (double precioProducto, double porcentajeDescuento) {//metodo para calcular el descuento
		return (precioProducto*porcentajeDescuento)/100;
	}
	
/*	static double calcularImpuesto (double precioProducto, double porcentajeImpuesto) {//metodo para calcular el impuesto
		return (precioProducto*porcentajeImpuesto)/100;
	}
	
*/
	static double calcularTotal (double precioProducto, double descuento, double impuesto) {//metodo para calcular precio total
		return (precioProducto - descuento) + impuesto; 
	}
	
	static double redondear (double valor, int decimales) {//metodo para calcular precio total
		double factor = Math.pow(10,  decimales);
		return Math.round(valor * factor) / factor;
		
	}
	

}
