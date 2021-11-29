function get_Data() {
    if (new Data() .getHours() < 18) {
        document.getElementById("Greeting").innerHTML= "How are you today?";
    }
}

if (1<2) {
    document.write( "the left number is smaller that the one on the right.")
}

function Age_Function() {. // age function 
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote";
    }
    else {
        Vote = "You are not old enough to vote";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() { // get the time 
    var Time= new Date (). getHours ();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's moring!";
    }
    else if (Time>= 12 == Time < 18) {
        Reply = "It's the afternoon!"
    }
    else {
        Reply = "It's night!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}


