alert("Welcome to Javascript calculator\nPlease Enter Two Numbers");

var a=eval( prompt("Enter first Number"));
var b=eval(prompt("Enter Second Number"));
var choice=prompt("Enter your choice\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Modulus");


switch(choice){

    case "1":document.write("The sum of entered numbers is "+(a+b));
    console.log("The sum of two numbers is "+(a+b));
    alert("The sum of two numbers is "+(a+b));
    break;
    case "2":document.write("The difference of entered numbers is "+(a-b));
    console.log("The difference of two numbers is "+(a-b));
    alert("The difference of two numbers is "+(a-b));
    break;
    case "3":document.write("The product of two numbers is "+(a*b));
    console.log("The product of two numbers is "+(a*b));
    alert("The product of two numbers is "+(a*b));
    break;
    case "4":document.write("The quotient of two numbers is "+(a/b));
    console.log("The quotient of two numbers is "+(a/b));
    alert("The quotient of two numbers is"+(a/b));
    break;
    case "5":document.write("The modulus of two numbers is "+(a%b));
    console.log("The modulus of two numbers is "+(a%b));
    alert("The modulus of two numbers is "+(a%b));
    break;
    default:document.write("Wrong choice ");
    console.log("Wrong choice ");
    alert("Wrong choice, please enter a valid choice ");
}



    