
/* här har jag skapat en funktion som innehåller min logik för att räkna poäng*/
function countScore(){
    let score = 0;
    const questions = [
        { elementName: "questionOneOption", correctAnswer: "true" },
        { elementName: "questionTwoOption", correctAnswer: "jail" }
    ];

   
    questions.forEach((question) => {
        const checkedElement = document.querySelector(
          `input[name="${question.elementName}"]:checked`
        );
    
        if (question.correctAnswer === checkedElement.value) {
            score ++; 
        }
      });
      console.log(score);
}

/* här har jag skapat en variabel som innehåller min submitknapp, 
sen skapar jag en eventlyssnare på min knapp och den lyssnar efter klick och då körs countscore.
 */

    const submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", countScore);



