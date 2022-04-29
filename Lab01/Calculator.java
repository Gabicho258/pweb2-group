
public class Calculator {
    public static void main(String[] args) {
        int num1 = 6;
        int num2 = 3;
        System.out.println("Suma entre " + num1 + " y " + num2 + " = " + add(num1, num2));
        System.out.println("Resta entre " + num1 + " y " + num2 + " = " + sub(num1, num2));
        System.out.println("Multiplicación entre " + num1 + " y " + num2 + " = " + mul(num1, num2));
        System.out.println("División entre " + num1 + " y " + num2 + " = " + dividir(num1, num2));
        System.out.println("Módulo entre " + num1 + " y " + num2 + " = " + mod(num1, num2));
    }

    static int dividir(int a, int b) {
        return a / b;
    }

    static int sub(int a, int b) {
        return a - b;
    }

    static int mod(int a, int b) {
        return a % b;
    }
    static int add(int a, int b){
    	return a+b;
    }
    static int mul(int a, int b){
    	return a*b;
    }
    
}
