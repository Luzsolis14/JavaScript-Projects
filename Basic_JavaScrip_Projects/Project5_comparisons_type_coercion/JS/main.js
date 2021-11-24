document.write(typeof "Word"); // type of operator

document.write(" 15" +5); // type of coercion 

function my_Function() { //NaN
    document.getElementById("Test").innerHTML= 0/0;
}
function my_Function2() { //true 
    document.getElementById("Test2").innerHTML= isNaN('This is a string');
}
function my_Function3() { //false
    document.getElementById("Test3").innerHTML= isNaN('007');
}
document.write(2E310 ); //infinity 

document.write(-3E310 ); //neg infinity 

document.write(10>2 ); //True

document.write(10<2 ); //false

console.log(2 +2 ); 

document.write(10==10); //True double ==

document.write(3==11); //false  double ==

X= 10;
Y= 10;
document.write(X===Y); //true triple ===

A= 9;
B= 6;
document.write(A===B); // false triple ===

document.write(5>2 && 10>4); // true && operators 
document.write(5<2 && 10<4); // flase && operators 

document.write(5> 10 || 10>4); //true ||
document.write(5>10||10>20); // false ||

function not_Function() {
    document.getElementById("Not").innerHTML=!(20>10); // this is a Not Oper
}
function not_Function2() {
    document.getElementById("Not2").innerHTML=!(5>10); // this is a Not Oper
}