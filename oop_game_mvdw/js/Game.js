/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
  constructor(){
      this.missed = 0;
      this.phrases = ["break a leg", "cutting corners", "under the weather", "so far so good", "no pain no gain"];
      this.activePhrase = '';
  }
  getRandomPhrase(){
      let randomNumber = Math.floor((Math.random() * 5))
      return this.phrases[randomNumber];
  }
  startGame(){
      this.missed = 0;
      const overlay = document.querySelector('#overlay');
      const keyboard = document.querySelectorAll('#qwerty button');
      const hearts = document.querySelectorAll('#scoreboard li img');
      keyboard.forEach(button => {
          button.className = "key"
      });
      hearts.forEach(heart =>{
          heart.src = "images/liveHeart.png";
      })
      overlay.style.display = "none";
      this.activePhrase = this.getRandomPhrase();
      const displayPhrase = new Phrase(this.activePhrase);
      displayPhrase.addPhraseToDisplay();
  }

    checkForWin(){
      const currentPhraseAlpha = document.querySelectorAll('#phrase .hide');
      const overlay = document.querySelector('#overlay');
      const overlayHeading = document.querySelector('#overlay .title');
      const overlayButton = document.querySelector('#overlay #btn__reset');
         if(currentPhraseAlpha.length === 0) {
         overlay.className = "win";
         overlay.style.display = "";
         overlayHeading.textContent = "You Win";
         overlayButton.textContent = "Play Again";
        }
      }

    gameOver(){
        const overlay = document.querySelector('#overlay');
        const overlayHeading = document.querySelector('#overlay .title');
        const overlayButton = document.querySelector('#overlay #btn__reset');
            overlay.className = "lose";
            overlay.style.display = "";
            overlayHeading.textContent = "You Lose";
            overlayButton.textContent = "Try Again";
         }

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

     if (this.missed === 5){
         setTimeout(this.gameOver, 1000);
     }

  }
    handleInteraction(){
       
    }  
}

