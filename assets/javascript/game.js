
// GLOBAL VARIABLES
// ------------------------------------------------------------------------------------------------------
// Arrays and Variables for holding data
var random = 0;
var amethyst = 0;
var ruby = 0;
var diamond = 0;
var quartz = 0;

    // Game Counters

var wins = 0;
var losses = 0;
var totalscore = 0;

// FUNCTIONS (resusable blocks of code that I will call upon when needed )
// ------------------------------------------------------------------------------------------------------

// start of game: regenerating a new random number, displaying the current wins and losses, and generate new random numbers for the crystals

// function to give you a random number at start
function startGame () {
	random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    amethyst = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    ruby = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    diamond = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    quartz = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

$( "#crystal" ).click(function() {
  alert( "Handler for .click() called." );
});







// Testing/Debugging

// Reset



var randomnumber= "????"



// MAIN PROCESS
// --------------------------------------------------------------------------------------------------------

// initiates the code for the first time:
    startGame();


// Register Keyclicks

document.onClick = function(event) {
    var amethyst = String.fromCharCode(event.keyCode).toLowerCase();
}

document.onClick = function(event) {
    var ruby = String.fromCharCode(event.keyCode).toLowerCase();
}
document.onClick = function(event) {
    var diamond = String.fromCharCode(event.keyCode).toLowerCase();
}
document.onClick = function(event) {
    var quartz = String.fromCharCode(event.keyCode).toLowerCase();
}

console.log(amethyst);