

/* Här har jag skapat en funktion som visar dina poäng jämtemot maxpoängen. */
function showTotalScore(score, maxScore) {
  const scoreParagraphElement = document.querySelector("#totalScore");
  scoreParagraphElement.innerText = `Your total score is ${score} out of ${maxScore} `;

  // Change color based on score percentage
  const scoreDiv = document.querySelector(".score");
  const scorePercentage = score / maxScore;

  if (scorePercentage < 0.5) {
    scoreDiv.style.backgroundColor = "red";
  } else if (scorePercentage <= 0.75) {
    scoreDiv.style.backgroundColor = "orange";
  } else {
    scoreDiv.style.backgroundColor = "green";
  }
}

/* här har jag skapat en funktion som innehåller min logik för att räkna poäng*/
function countScore() {
  let score = 0;

  /* Här har jag skapat en array som innehåller object som representerar frågorna.
 ElementName är namnet på inputElementen per fråga och correctAnswer är de rätta svaren */

  const questions = [
    { elementName: "questionOneOption", correctAnswer: ["true"] },
    { elementName: "questionTwoOption", correctAnswer: ["jail"] },
    { elementName: "questionThreeOption", correctAnswer: ["kelly", "beyoncé"] },
    { elementName: "questionFourOption", correctAnswer: ["false"] },
    { elementName: "questionFiveOption", correctAnswer: ["kodak"] },
    { elementName: "questionSixOption", correctAnswer: ["knows"] },
    {
      elementName: "questionSevenOption",
      correctAnswer: ["kim", "potential", "fan"],
    },
    { elementName: "questionEightOption", correctAnswer: ["true"] },
    { elementName: "questionNineOption", correctAnswer: ["florida"] },
    { elementName: "questionTenOption", correctAnswer: ["texas"] },
  ];

  /* Här skapar jag en loop som loopar igenom mina questions ..... */
  questions.forEach((question) => {
    const checkedElements = document.querySelectorAll(
      `input[name="${question.elementName}"]:checked`
    );

    let correctAnswers = [];
    let wrongAnswers = [];

    checkedElements.forEach((element) => {
      if (question.correctAnswer.includes(element.value)) {
        correctAnswers.push(element);
      } else {
        wrongAnswers.push(element);
        const label = element.nextElementSibling;
        label.style.color = "red";
      }
    });

    const hasNoFailedAnswers = wrongAnswers.length === 0;
    const hasAllCorrectAnswers = correctAnswers.length === question.correctAnswer.length;

    if (hasNoFailedAnswers && hasAllCorrectAnswers) {
      score++; 
    }
  });
  showTotalScore(score, questions.length);
}





/* här har jag skapat en variabel som innehåller min submitknapp, 
sen skapar jag en eventlyssnare på min knapp och den lyssnar efter klick och då körs countscore.
 */

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", countScore);
