/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
  constructor(){
      this.missed = 0;
      this.phrases = ["break a leg", "cutting corners", "under the weather", "so far so good", "no pain no gain"];
      this.activePhrase;
  }

  /**
   * Function to return a random phrase from the this.phrases array of phrases above.
   */
  getRandomPhrase(){
      let randomNumber = Math.floor((Math.random() * 5))
      return this.phrases[randomNumber];
  }

  /**
   * Function that resets all parameters as the start of the game.
   * Assigns a new random phrase as the active phrase.
   * Displays the active phrase by calling addPhraseToDisplay() found in Phrase.js.
   */
  startGame(){
      
      this.missed = 0;
      const overlay = document.querySelector('#overlay');
      const keyboard = document.querySelectorAll('#qwerty button');
      const hearts = document.querySelectorAll('#scoreboard li img');
      const overlayButton = document.querySelector('#overlay #btn__reset');
      const overlayImg = document.querySelector('#overlay_img');
      keyboard.forEach(button => {
          button.className = "key"
          button.disabled = false;
      });
      hearts.forEach(heart =>{
          heart.src = "images/liveHeart.png";
      })
      overlay.style.display = "none";
      this.activePhrase = this.getRandomPhrase();
      const displayPhrase = new Phrase(this.activePhrase);
      displayPhrase.addPhraseToDisplay();
      overlayButton.className = "";
      overlayImg.src = "";
  }

  /**
   * Function to check if user has guessed the phrase correctly. 
   * If user guessed it correctly overlay with class name "win" is displayed.
   */
    checkForWin(){
      const currentPhraseAlpha = document.querySelectorAll('#phrase .hide');
      const overlay = document.querySelector('#overlay');
      const overlayImg = document.querySelector('#overlay_img');
      const overlayHeading = document.querySelector('#overlay .title');
      const overlayButton = document.querySelector('#overlay #btn__reset');
         if(currentPhraseAlpha.length === 0) {
         overlay.className = "win";
         overlay.style.display = "";
         overlayHeading.textContent = "You Win";
         overlayImg.src = "images/fireworks.gif";
         overlayButton.textContent = "Play Again";
         overlayButton.className = "button_win";
        }
      }

    /**
    * Function that displays overlay with class "lose".
    */
    gameOver(){
        const overlay = document.querySelector('#overlay');
        const overlayHeading = document.querySelector('#overlay .title');
        const overlayButton = document.querySelector('#overlay #btn__reset');
            overlay.className = "lose";
            overlay.style.display = "";
            overlayHeading.textContent = "Better luck next time";
            overlayButton.textContent = "Try Again";
            overlayButton.className = "button_lose";
         }
    /**
     * Function to remove a heart/ replace a red heart with a gray heart if a user chooses the wrong letter.
     */
    removeLife(){
        const hearts = document.querySelectorAll('#scoreboard ol li img');
        if(this.missed === 1){
            hearts[4].src = "images/lostHeart.png";
        } else if (this.missed === 2){
            hearts[3].src = "images/lostHeart.png";
        } else if(this.missed === 3){
            hearts[2].src = "images/lostHeart.png";
        } else if (this.missed === 4){
            hearts[1].src = "images/lostHeart.png";
        } else if(this.missed === 5){
            hearts[0].src = "images/lostHeart.png";
        }
        }

     /**
      * Function that adds event listener to keyboard buttons as well as computer keyboard buttons.
      * If a correct letter is chosen the button is disabled and given the class of "chosen".
      * Calls showMatchedLetter() found in Phrase.js to display/show the correct letter in the phrase.
      *     Calls checkForWin() to check if user has guessed all the letters of the phrase and trigger win.
      * If incorrect letter is chosen the button is disabled and given the class of "wrong".
      *     Calls removeLife() to replace a red heart with a gray one. 
      * If this.missed tallies to 5 the keyboard is disabled and the rest of the phrase displayed in red.
      * this.gameOver() is called afer 4000ms. 
      */   
    handleInteraction(){
        const button = document.querySelectorAll('#qwerty button');
        button.forEach(but => {
           but.addEventListener("click", (e)=>{
                   if(this.activePhrase.includes(e.target.textContent)){
                        e.target.className = "chosen";
                        but.disabled = true;
                        newPhrase.showMatchedLetter(e.target.textContent);
                        this.checkForWin();
                    } else {
                       e.target.className = "wrong"; 
                      but.disabled = true;
                       newGame.missed +=1;
                       this.removeLife();
                    }
                    if (this.missed === 5){
                        const phraseDisplay = document.querySelectorAll('#phrase ul li');
                        button.forEach(butt => {
                            butt.disabled = true;
                        })
                        phraseDisplay.forEach(letter => {
                            if (letter.className === "hide letter"){
                                letter.className = "show_lost";
                            }
                        });
                        setTimeout(this.gameOver, 4000);
                    }
            }   );
        })   
        document.addEventListener("keyup", (e)=>{
            button.forEach(but => {
                if(but.textContent.includes(e.key)){
                 but.click();
                }
            })
            
        });
    }  
}

