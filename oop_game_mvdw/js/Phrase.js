/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(phrase){
         this.phrase = phrase.toLowerCase();
     }

     /**
      * Function to add the active phrase to the phrase list items (Empty blocks) and assign them the
      *    hide letter or space class accordingly.
      */
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
     
     /**
      * Function to display letter if guessed correctly by changing class name to "show".
      */
     showMatchedLetter(letter){
         const phraseLi = document.querySelectorAll('#phrase ul li');
         phraseLi.forEach(item => {
             if(item.textContent === letter){
                 item.className = "show";
             }

         });
    }

    /**
     * Function to check if letter was guessed correctly or not. 
     * returns true or false
     */
     checkLetter(){
        const button = document.querySelectorAll('#qwerty button');
        button.forEach(but => {
           but.addEventListener("click", (e)=>{
                   if(this.activePhrase.includes(e.target.textContent)){
                        return true;
                    } else {
                       return false;
                    }
            });

        })
        
       
    }  
}
