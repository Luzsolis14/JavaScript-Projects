function Ride_Function () { // this function will see if the person is old enough once they enter their age 
    var Age, Can_ride;
    Age= document.getElementById("Age").value;
    Can_ride = (Age<18)?"You are too young": "You are old enough";
    document.getElementById("Vote").innerHTML= Can_ride + " to Vote!!";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML= // here it puts the statement all together!
    "Erik drives a "+Erik.Vehicle_Color +"-colord " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function count_Function() { // nested function 
    document.getElementById ("Counting").innerHTML= Count();
    function Count () {
        var Starting_point = 9;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}