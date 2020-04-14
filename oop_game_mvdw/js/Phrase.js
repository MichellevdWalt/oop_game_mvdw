/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(phrase){
         this.phrase = phrase.toLowerCase();
     }
     addPhraseToDisplay() {
         const previousLi = document.querySelectorAll('#phrase ul li');
         const previousUl = document.querySelector('#phrase ul');
         for(var j= 0; j < previousLi.length; j+=1){
            previousUl.removeChild(previousUl.firstChild);
         }
        const phraseLength = this.phrase.length;
        let letterArray =[];
        for (var i = 0; i<phraseLength; i+= 1){
            letterArray.push(this.phrase.charAt(i));
        }
       // const phraseDiv = document.querySelector('#phrase');
        const phraseUl = document.querySelector('#phrase ul');
        const lettersEx = /[a-z]/;
        letterArray.forEach(letter => {
            if(lettersEx.test(letter)) {
                const newLi = document.createElement("li");
                phraseUl.appendChild(newLi);
                newLi.className = "hide letter";
                newLi.textContent = letter;
            } else if (letter === " "){
                const newLi = document.createElement("li");
                phraseUl.appendChild(newLi);
                newLi.className = "space";
                newLi.textContent = letter;
            }
        });
     }
     handleInteraction(){
         
     }
     
     

     showMatchedLetter(letter){
         const phraseLi = document.querySelectorAll('#phrase ul li');
         phraseLi.forEach(item => {
             if(item.textContent === letter){
                 item.className = "show";
             }

         });


    }
     checkLetter(){
         const keyboardDiv = document.querySelector('#qwerty');
         const button = document.querySelectorAll('#qwerty button');
         let correctLetter;
         button.forEach(but => {
            but.addEventListener("click", (e)=>{
                    if(newGame.activePhrase.includes(e.target.textContent)){
                         e.target.className = "chosen";
                        correctLetter = e.target.textContent
                         this.showMatchedLetter(e.target.textContent);
                         newGame.checkForWin();
                     } else {
                        e.target.className = "wrong"; 
                        newGame.missed +=1;
                        newGame.removeLife();
                     }
             });

         })
         


    }
    
 }

