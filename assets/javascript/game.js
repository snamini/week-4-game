
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

    $("#random").text(random);


// When you click the crystal, this will happen
$( "#amethyst" ).click(function() {
  console.log( "clicked amethyst");
  totalscore += amethyst;
  console.log(totalscore);

      $("#totalscore").text(totalscore);


      // if the crystal is equal to the same score, they win. if its over, they loose, 
});

$( "#ruby" ).click(function() {
  console.log( "clicked ruby." );
  totalscore += ruby;
    console.log(totalscore);

       $("#totalscore").text(totalscore);

// if the crystal is equal to the same score, they win. if its over, they loose, 

// if they loose, restart the game. if they win, restart the game. 

// if totalscore is greater than random, losses must equal 1, then start game again.


});

$( "#diamond" ).click(function() {
  console.log( "clicked diamond." );
  totalscore += diamond;
    console.log(totalscore);

       $("#totalscore").text(totalscore);
});

$( "#quartz" ).click(function() {
  console.log( "clicked quartz." );
  totalscore += quartz;
    console.log(totalscore);

       $("#totalscore").text(totalscore);
});








}







// Testing/Debugging

// Reset


// MAIN PROCESS
// --------------------------------------------------------------------------------------------------------

// initiates the code for the first time:
    startGame();


console.log(amethyst);