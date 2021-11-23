function addition_function() { //adding two numbers 
    var addition = 5+2;
    document.getElementById("Math") .innerHTML="5+2=" + addition;
}
function subtraction_function() { // subtracting two numbers 
    var subtraction = 10-8;
    document.getElementById("Math") .innerHTML="10-8=" + subtraction;
}
function multiplication_function() { //multiplying two numbers 
    var multiplication = 48*6;
    document.getElementById("Math") .innerHTML="48x6=" + multiplication;
}
function division_function() { //dividing two numbers 
    var division = 15/3;
    document.getElementById("Math") .innerHTML="15/3=" + division;
}
function more_Math() {  //multiple operations at once 
    var simple_Math = (1+2) * 10/2 -5;
    Document.getElementById("Math").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}
function modulus_Operator() { //getting a remainder 
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML="When you divide 25 by 6 you have a remainder of:" + simple_Math;
}
function negation_Operator () { // negative numbes 
    var x= 10;
    document.getElementById("Math"),innerHTML= -x;
}
var X= 5.25;
X--;
document.write(X); //rounds down 

window.alert(Math.random()*100); // this gives you a random number from 0-100


