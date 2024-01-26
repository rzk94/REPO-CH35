package org.generation.encapsulation;

/*
 * La estructura básica para crear objetos es la siguiente:
 * 		1. Atributos o Propiedades
 * 		2. Método Constructor (1 - n métodos)
 * 		3. Métodos del objeto (comportamiento)
 * 		4. Métodos Getters y Setters
 * 		5. Método toString
 */

public class Employee {
	//1. Encapsular Atributos o propiedades utilizando un modificador private
	private String nombre;
	private String apellido;
	private int id;
	private double salario;
	private String puesto;
	
	//2. Encapsular el Método Constructor de tipo public para poder acceder al constructor
	//Tiene el mismo nombre que la clase, no retorna nada, recibe parámetross (atributos) y los asigna a variables del constructor (this)
	public Employee(String nombre, String apellido, int id, double salario, String puesto){//al instanciar objetos, sigue este orden
		//Atributos quee viven dentro del método constructor
		this.nombre = nombre;			
		this.apellido = apellido;
		this.id = id;
		this.salario = salario;
		this.puesto = puesto;
	}//Employee
							//*Sobrecarga de métodos: tener muchos métodos con el mismo nombre
	//3. Encapsular Métodos de Comportamiento de tipo public
	public void trabajar() {
		System.out.println("Estoy trabajando");
	}
	public void calcularSalario() {
		System.out.println("El salario del empleado " + this.nombre + " " + this.apellido + " es de $" + this.salario + " pesos");
	}
	public void capacitarse() {
		System.out.println("El trabajador del puesto "+ this.puesto + " se capacita");
	}
	public void infoGeneral() {
		System.out.println("Id: " +this.id + ", Nombre: " + this.nombre + ", Apellido: " + this.apellido);
	}
	
	/*
	 * 4. Getters y Setters. 
	 * Son Métodos que nos permiten obtener o enviar información que está protegida por modificadores de acceso y de esta manera interactuar con nuestros objetos. 
	 * Los Getters nos permiten obtener la info y los Setter enviar la info.
	 * 
	 * Estructura de Getter:
	 * 		public tipoDato getNombreVariable(){
	 * 				return nombreVariable
	 * 		}
	 * 		p.e.
	 * 			public String getNombre(){
	 * 				return nombre;
	 * 			}
	 * Estructura de Setter:
	 *  		public void setNombreVariable(variable){ 
	 * 				thiss.variable = variable;
	 * 		}
	 * 		p.e.
	 * 			public void setNombre(String nombre){
	 * 				this.nombre = nombre;
	 * 			}
	 * Podemos inicializar getters y setters dando click derecho > Source > Generate Getters y Setters
	 */
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public double getSalario() {
		return salario;
	}
	public void setSalario(double salario) {
		this.salario = salario;
	}
	public String getPuesto() {
		return puesto;
	}
	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}
	
	//5. Método toString. Es un "Override" que se refiere a la capacidad de proporcionar información específica de una clase en forma de cadena de caracteres. Nos permite imprimir nuestros objetos en formato String.
	//Podemos inicializar tostring dar click derecho > Source > Generate toSstring > Fields > Generate
	//Override : Capacidad que tiene una clase para implementar un método desde su superclase
	@Override
	public String toString() {
		return "Employee ["
				+ "nombre=" + nombre + 
				", apellido=" + apellido + 
				", id=" + id + 
				", salario=" + salario + 
				", puesto=" + puesto + 
				"]";
	}//Método toString
	
}//class Employee