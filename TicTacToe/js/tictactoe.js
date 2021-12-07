let activePlayer = 'X'; //this variable will keep track of whose turn it is 
let selectedSquares = [];
function placeXOrO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById (squareNumber);
        if (activePlayer ==='X') {
            select.style.backgroundImage = 'url ("images/x.png")';
        } else {
            select.style.backgroundImage = 'url ("images/o.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions ();
        if (activePlayer === 'X') {
            activePlayer = 'O' ;
        } else {
            activePlayer = 'X';
        }


        audio('./media/place.mp3');
        if(activePlayer === 'O') {
            disableClick() ;
            setTimeout(function () { computersTurn(); }, 1000)
        } 
        return true;
    }
    function computersTurn() {
        let success = false ;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random()*9));
            if (placeXOrO(pickASquare)){
                placeXOrO(pickASquare);
                success= true;
            };
        }

    }
}


//This function parses the selectedSquares array to search for win conditions. //drawWinLine function is called to draw line if condition is met.

function checkWinConditions() { 

if	(arrayIncludes('OX','1X', '2X')) { drawWinLine(50,100,558,100)}

else if (arrayIncludes('3X', '4X', 	'5X')) {drawWinLine(50,304,558,304)} 

else if (arrayIncludes('6X','7X' ,'8X')) { drawWinLine(50,508,558,508)}

else if (arrayIncludes('OX','3X' ,'6X')) { drawWinLine(100,50,100,558)}

else if (arrayIncludes('1X','4X' ,'7X')) { drawWinLine(304,50,304,558)}

else if (arrayIncludes('2X','5X' ,'8X')) {drawWinLine(508,50,508,558)}

else if (arrayIncludes('6X','4X' ,'2X')) {drawWinLine(100,508,510,90)}

else if (arrayIncludes('OX','4X' ,'8X')) {drawWinLine(100,100,520,520)}

else if (arrayIncludes('00','10' ,'20')) {drawWinLine(50,100,558,100)}

else if (arrayIncludes('30','40' ,'50')) {drawWinLine(50,304,558,304)}

else if (arrayIncludes('60','70' ,'80')) {drawWinLine(50,508,558,508)}

else if (arrayIncludes('00','30' ,'60')) {drawWinLine(100,50,100,558)}	

else if (arrayIncludes('10','40','70'))	{drawWinLine(304,50,304,558)}

else if (arrayIncludes('20','50' ,'80')) {drawWinLine(508,50,508,558)}

else if (arrayIncludes('60','40' ,'20')) {drawWinLine(100,508,510,90)}

else if (arrayIncludes('00','40','80')) {drawWinLine(100,100,520,520)}

//squares are selected the code executes.
else if (selectedSquares.length >= 9) {
//This function playes the tie game sound.
audio('./media/tie.mp3');
setTimeout(function () {resetGame();},1000)
}

function arrayIncludes(squareA, squareB, squareC) {

    const a = selectedSquares.includes(squareA) 
    const b = selectedSquares.includes(squareB)
    const c = selectedSquares.includes(squareC)
    // If the 3 variables we pass are all included in our array true is
    //returned and our else if condition executes the drawWinLine function.
    if (a === true && b	 === true && c === true) { return true }
    }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes our body unclickable.
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 100);
    }
    //This function takes a string parameter of the path you set earlier for
    //placement sound ('./media/place.mp3')
    function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    audio.play();
}

//This function utilizes html canvas to draw win lines.
function drawWinLine(coordXl, coordYl, coordX2, coordY2) {
    //This line accesses our html canvas element.
    const canvas = document.getElementById('win-lines')
    //This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines x axis is.
    let xl = coordXl,
    //This line indicates where the start of a lines y axis is.
    yl = coordYl,
    //This line indicates where the end of a lines x axis is.
    x2 = coordX2,
    //This line indicates where the end of a lines x axis is.
    y2 = coordY2,
    //This variable stores temporary x axis data we update in our animation loop.
    x = xl,
    //This variable stores temporary y axis data we update in our animation loop.
    y = yl;


//This function interacts with the cavnas
function animateLineDrawing() {
     //This variable creates a loop.
    const animationLoop = requestAnimationFrame(animateLineDrawing); 
    //This method clears content from last loop iteration. 
    c.clearRect(0, 0, 608, 608)
    //This method starts a new path
    c.beginPath();
    // This method moves us to a starting point for our line. 
    c.moveTo(xl, yl)
    // This method indicates the end point in our line. 
    c.lineTo(x, y)
    // This method sets the width of our line.
    c.lineWidth = 10;
    //This method sets the color of our line.
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
    //This method draws everything we laid out above.
     c.stroke();
    //This condition checks if we've reached the endpoint.
        if (xl <= x2 && yl <= y2) {
    //This condition adds 10 to the previous end x point.
        if (x < x2) { x += 10; }
    //This condition adds 10 to the previous end y point.
        if (y < y2) { y	+= 10; }
    //This condition cancels our animation loop
    //if we've reach the end points.
        if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
    }
    //This condition is similar to the one above.
    //This is necessary for the 6, 4, 2 win condition
    if (xl <= x2 && yl >= y2) { 
        if (x < x2) { x	+= 10; } 
        if (y > y2) { y -= 10; }
        if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }
    }
}
//This function clears our canvas after our win line is drawn.
function clear() {
//This line starts our animation loop.
    const animationLoop = requestAnimationFrame(clear);
//This line clears our canvas.
    c.clearRect(0, 0, 608, 608);
//This line stops our animation loop. 
    cancelAnimationFrame(animationLoop);
}
//This line disallows clicking while the win sound is playing
    disableClick();
//This line plays the win sounds.
    audio('./media/winGame.mp3');
//This line calls our main animation loop. 
    animateLineDrawing();
//This line waits 1 second. Then, clears canvas, resets game, and allows clicking again. 
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//This function resets the game in the event of a tie or a win. 
function resetGame() {
//This for loop iterates through each HTML square element 
for (let i = 0; i < 9; i++) {
//This variable gets the html element of i.
let square = document.getElementById(String(i))
//This removes our elements backgroundImage. 
square.style.backgroundImage = ''
}
//This resets our array so it is empty and we can start over.
 selectedSquares = [];
}
