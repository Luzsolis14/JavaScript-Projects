function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a good choice!";
    switch (Colors) {
        case "Pizza":
            Color_Output = "Pizza" + Color_String;
            break;
            case "Salad":
                Color_Output = "Salad" + Color_String;
            break;
            case "Tacos":
                Color_Output = "Tacos" + Color_String;
            break;
            case "Burgers":
                Color_Output = "Burgers" + Color_String;
            break;
            case "Pasta":
                Color_Output = "Pasta" + Color_String;
            break;
            case "PB&J":
                Color_Output = "PB&J" + Color_String;
            break;
            default:
                Color_Output = "Please enter a Food exactly as wrriten on the list above.";       
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function () {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed !";
}