//getters
const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const score = document.getElementById('score');
const playAgain = document.getElementById('playAgain');

let questionNumber = 0;
let scoreAmount = 0

const questions = [
  {
    "question": "What day new years eve?",
    "answers": [
      "December 30th", "December 31st", "January 1", "Decmber 25th"
    ],
    "correct": 1
  },
  {
    "question": "What is teh best drink on new years eve?",
    "answers": [
      "Rum", "Vodka", "Tequila", "Gin"
    ],
    "correct": 0
  }
]

const quizLength = questions.length;

function loadQuestion(questionNumber) {
  question.innerText = questions[questionNumber].question;
}

function loadAnswers(questionNumber) {
  answer1.innerText = questions[questionNumber].answers[0];
  answer2.innerText = questions[questionNumber].answers[1];
  answer3.innerText = questions[questionNumber].answers[2];
  answer4.innerText = questions[questionNumber].answers[3];
}

function checkAnswer(answerNumber) {
  console.log('answer number chosen: ', answerNumber);
  // we check what the correct answer is for this question
  let correctAnswer = questions[questionNumber].correct
  if (answerNumber === correctAnswer) {
     // if correct we increment the score by 1
    scoreAmount++;
    score.innerText = scoreAmount;
  }
  // after we increment the questionNumber
  questionNumber ++;
  // we check if it is the end of the quiz ( have we run out of questions)
  if (questionNumber === quizLength) {
    endgame();
  } else {
    // if not we load the next question
    loadQuestion(questionNumber);
    loadAnswers(questionNumber);
  }
}

function endgame() {
  playAgain.style.visibility = "visible";
}

function endgameOption(chosen) {
  if (chosen === 0) {
    window.location.reload()
  } else {
    window.location.href='https://google.com';
  }
}
function startQuiz() {
  playAgain.style.visibility = "hidden";
  loadQuestion(questionNumber);
  loadAnswers(questionNumber);
}
startQuiz()