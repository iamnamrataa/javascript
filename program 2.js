//declaration
var operator = '*';
var a, b;
//getting values
a = document.getElementById("a").value;
b = document.getElementById("b").value;
switch (operator) {
    case '+':
        document.write("Addition of two numbers is: " + (a + b));
        break;
    case '-':
        document.write("Subtraction of two numbers is: " + (a - b));
        break;
    case '+':
        document.write("Multiplication of two numbers is: " + (a * b));
        break;
    case '+':
        document.write("Division of two numbers is: " + (a / b));
        break;
    case '+':
        document.write("Modulus of two numbers is: " + (a % b));
        break;
    default:
        document.write("You entered wrong operator");
        break;
}