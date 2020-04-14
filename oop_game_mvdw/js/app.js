/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let newGame;
let newPhrase;

function startButton(){
    const startBut = document.querySelector('#btn__reset');
    newGame = new Game();
    newPhrase = new Phrase(newGame.activePhrase);
    startBut.addEventListener("click", (e)=> newGame.startGame());
    newGame.handleInteraction();
}
startButton();

