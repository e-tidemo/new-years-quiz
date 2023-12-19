//getters
const question = document.getElementById('question');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const score = document.getElementById('score');
const playAgain = document.getElementById('playAgain');

let questionNumber = 0;
let scoreAmount = 0;

const questions = [
  {
    "question": "What day is new years eve?",
    "answers": [
      "December 30th", "December 31st", "January 1", "Decmber 25th"
    ],
    "correct": 1
  },
  {
    "question": "If you are in Scotland on New Year's Eve, who do you kiss at midnight?",
    "answers": [
      "Your sibling", "Your partner", "Whoever is closest to you", "Everyone in the room"
    ],
    "correct": 3
  },
  {
    "question": "What calendar is Chinese New Year based on?",
    "answers": [
      "Gregorian calendar", "Julian calendar", "Lunar calendar", "Hebrew calendar"
    ],
    "correct": 2
  },
  {
    "question": "At one minute before midnight, twelve of what are eaten in Spain?",
    "answers": [
      "Grapes", "Raisins", "Cherry tomatoes", "Apricots"
    ],
    "correct": 0
  },
  {
    "question": "What Australian city has one of the largest New Years celebrations?",
    "answers": [
      "Melbourne", "Brisbane", "Perth", "Sydney"
    ],
    "correct": 3
  },
  {
    "question": "What do you throw at your family and friends' doors for good luck in Denmark?",
    "answers": [
      "Wine glasses", "Plates", "Garden gnomes", "Christmas ornaments"
    ],
    "correct": 1
  },
  {
    "question": "What colour of underwear is considered lucky to wear on New Year's Eve in Italy?",
    "answers": [
      "Blue", "Red", "Yellow", "Green"
    ],
    "correct": 1
  },
  {
    "question": "This European capital has one of the largest firework displays and most firework sales fund rescue operations in the country.",
    "answers": [
      "Athens", "Oslo", "Reykjavik", "Vienna"
    ],
    "correct": 2
  },
  {
    "question": "Eating 365 of a particular food is believed to give you luck for each day of the new year, what is the food?",
    "answers": [
      "Green peas", "Soy beans", "Black-eyed peas", "Brussel sprouts"
    ],
    "correct": 2
  },
  {
    "question": "What did you melt and pour into cold water to predict what the coming year would give you in the olden days in Sweden?",
    "answers": [
      "Pewter", "Beeswax", "Aluminium", "Candle wax"
    ],
    "correct": 0
  },
  {
    "question": "What is written on the confetti that's thrown in Times Square in New York on New Year's Eve?",
    "answers": [
      "New years resolutions", "Well wishes", "Fortunes", "People's wishes"
    ],
    "correct": 3
  },
  {
    "question": "From what Roman god does the month of January get its name?",
    "answers": [
      "Juran", "Jan", "Janus", "Juan"
    ],
    "correct": 2
  },
  {
    "question": "What is the translation for the title of the song 'Auld Lang Syne'?",
    "answers": [
      "For the sake of old times", "For the future to come", "For the times that have gone", "For the times we shared"
    ],
    "correct": 0
  },
{
  "question": "What day (in the Gregorian calendar) does Ethiopia celebrate New Year's Eve according to their 13-month calendar?",
  "answers": [
    "11th of September", "25th of December", "6th of January", "The day of the second full moon after the winter solstice"
  ],
  "correct": 0
},
{
  "question": "What year is it in Ethiopia according to their calendar?",
  "answers": [
    "2022", "2016", "2012", "2008"
  ],
  "correct": 1
}
];

const quizLength = questions.length;
/**
 * This function takes the question number parameter and sets the innertext of the question area
 */
function loadQuestion(questionNumber) {
  question.innerText = questions[questionNumber].question;
}
/**
 * This function loads the answer alternatives to the questions
 */
function loadAnswers(questionNumber) {
  answer1.innerText = questions[questionNumber].answers[0];
  answer2.innerText = questions[questionNumber].answers[1];
  answer3.innerText = questions[questionNumber].answers[2];
  answer4.innerText = questions[questionNumber].answers[3];
}
/**
 * This function makes the text box wobble slowly and makes sure that the blur effects are not used all the time
 */
function sober() {
  document.getElementById('blurArea').style.display = 'none';
  document.getElementById('questionsSection').classList.remove('drunk-animation');
  document.getElementById('questionsSection').classList.add('sober-animation');
}
/**
 * This function brings in animations for the text-box to wobble faster, the text to go in and out of focus and for the background to blur completely
 */
function drunk() {
  document.getElementById('blurArea').style.display = 'block';
  document.getElementById('questionsSection').classList.add('drunk-animation');
  document.getElementById('questionsSection').classList.remove('sober-animation');
}
/**
 * This function checka if the answer is correct and if it is, increases the score with one point at a time,
 * and if it is not, the function calls the function "drunk"
 * Then the function increases the question number to move to the next question until the game ends
 */
function checkAnswer(answerNumber) {
  // check what the correct answer is for this question
  let correctAnswer = questions[questionNumber].correct;
  if (answerNumber === correctAnswer) {
     // if correct - increment the score by 1
    scoreAmount++;
    score.innerText = scoreAmount;
    sober();
  } else {
    drunk();
  }
  // after we increment the questionNumber
  questionNumber ++;
  // check if it is the end of the quiz
  if (questionNumber === quizLength) {
    endgame();
  } else {
    // if not, we load the next question
    loadQuestion(questionNumber);
    loadAnswers(questionNumber);
  }
}
/**
 * This function shows the "start" section and hides the "rules" and "questions" sections
 */
function showStart() {
  document.getElementById('startSection').style.display = 'block';
  document.getElementById('rulesSection').style.display = 'none';
  document.getElementById('questionsSection').style.display = 'none';
}
/**
 * This function shows the "rules" section and hides the "start" and "questions" sections
 */
function showRules() {
  document.getElementById('startSection').style.display = 'none';
  document.getElementById('rulesSection').style.display = 'block';
  document.getElementById('questionsSection').style.display = 'none';
}
/**
 * This function shows the "questions" section and hides the "start" and "rules" sections
 */
function showQuestions() {
  document.getElementById('startSection').style.display = 'none';
  document.getElementById('rulesSection').style.display = 'none';
  document.getElementById('questionsSection').style.display = 'block';
}
/**
 * This function shows the question about playing again at the end of the quiz
 */
function endgame() {
  playAgain.style.display = 'block';
  document.getElementById('questionsSection').style.display = 'none';
}
/**
 * This function directs the user to either play again or leave the website
 */
function endgameOption(chosen) {
  if (chosen === 0) {
    window.location.reload();
  } else {
    window.location.href='https://www.systembolaget.se/';
  }
}
/**
 * This function directs the user to the feedback form
 */
function feedbackOption() {
  window.location.href='feedback.html';
}
/**
 * This function directs the user back to the start page regardless of where on the website the user is
 */
function redirect(){
  window.location.href='index.html';
}
/**
 * This function sets the conditions for the start of the quiz, 
 * the page is not blurred and the question number is set to -1 to then increase with one at a time
 */
function startQuiz() {
  playAgain.style.display = 'none';
  sober();
  // Start by showing the "start" section
  showStart();
  questionNumber = -1;
  // Increment questionNumber before loading the first question
  questionNumber++;
  loadQuestion(questionNumber);
  loadAnswers(questionNumber);
}
/**
 * This function moves the user from the start section to the rules
 */
function next(sectionNumber) {
  if (sectionNumber === 0) {
    showRules();
  } else if (sectionNumber === 1) {
    showQuestions();
  }
}

startQuiz();