function addition_function() { //adding two numbers 
    var addition = 5+2;
    document.getElementById("Math-add") .innerHTML="5+2=" + addition;
}
function subtraction_function() { // subtracting two numbers 
    var subtraction = 10-8;
    document.getElementById("Math-sub") .innerHTML="10-8=" + subtraction;
}
function multiplication_function() { //multiplying two numbers 
    var multiplication = 48*6;
    document.getElementById("Math-mult") .innerHTML="48x6=" + multiplication;
}
function division_function() { //dividing two numbers 
    var division = 15/3;
    document.getElementById("Math-div") .innerHTML="15/3=" + division;
}
function more_Math() {  //multiple operations at once 
    var simple_Math = (1+2) * 10/2 -5;
    document.getElementById("Math-oper").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}
function modulus_Operator() { //getting a remainder 
    var simple_Math = 25 % 6;
    document.getElementById("Math-modu").innerHTML="When you divide 25 by 6 you have a remainder of:" + simple_Math;
}
function negation_Operator () { // negative numbes 
    var x= 10;
    document.getElementById("Math-neg").innerHTML= -x;
}
function incrementDown_Operator() { //increment down operator
    var X= 6;
    X--;
    document.getElementById("Math-incD").innerHTML="When you take 1 away from 6 you get " + X;
}
function incrementUp_Operator() { //increment Up operator
    var  Y = 6;
    Y++;
    document.getElementById("Math-incU").innerHTML="When you add 1 to 6 you get " + Y;
}
function random_Math() { //Picks random number 
    var randoInt = Math.random()*100;
    document.getElementById("Math-rando").innerHTML= "pick a random number between 0 and 100 " + randoInt; 
}
