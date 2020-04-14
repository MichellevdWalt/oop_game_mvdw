/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let newGame;
let newPhrase;

/**
 * Function to create a new game from the Game class in Game.js. 
 * Creates a new Phrase using the activePhrase property of the newGame. Class Phrase found in Phrase.js.
 * Event listener on overlay button calls startGame() function of the newGame variable. Found in Game.js.
 * Calls handleInteraction() of the newGame variable. Found in Game.js.
 */
function startButton(){
    const startBut = document.querySelector('#btn__reset');
    newGame = new Game();
    newPhrase = new Phrase(newGame.activePhrase);
    startBut.addEventListener("click", (e)=> newGame.startGame());
    newGame.handleInteraction();
}
startButton();

