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
    "question": "What do people in Brazil do to bring good luck for the coming year?",
    "aswers": [
      "Make seven wishes while jumping seven waves", "Make three wishes while releasing floating candles in the water", "Make three wishes while releasing floating rice paper lanterns", "Make seven wishes while eating seven grapes within the last 10 minutes before midnight"
    ],
    "correct": 0
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
function sober() {
  blurArea.style.display = 'none';
}
function drunk() {
  blurArea.style.display = 'block';
}
function checkAnswer(answerNumber) {
  console.log('answer number chosen: ', answerNumber);
  // we check what the correct answer is for this question
  let correctAnswer = questions[questionNumber].correct
  if (answerNumber === correctAnswer) {
     // if correct we increment the score by 1
    scoreAmount++;
    score.innerText = scoreAmount;
    sober();
  } else {
    drunk();
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

// Function to show the "start" section and hide the "rules" section
function showStart() {
  document.getElementById('startSection').style.display = 'block';
  document.getElementById('rulesSection').style.display = 'none';
}

// Function to show the "rules" section and hide the "start" section
function showRules() {
  document.getElementById('startSection').style.display = 'none';
  document.getElementById('rulesSection').style.display = 'block';
}

// Function to show the questions section and hide the "start" and "rules" sections
function showQuestions() {
  document.getElementById('startSection').style.display = 'none';
  document.getElementById('rulesSection').style.display = 'none';
  document.getElementById('questionsSection').style.display = 'block';
}

// Function to show the question about playing again
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
  playAgain.style.visibility = 'hidden';
  sober()
  // Start by showing the "start" section
  showStart();
  // Increment questionNumber before loading the first question
  questionNumber++;
  loadQuestion(questionNumber);
  loadAnswers(questionNumber);
}
function next(sectionNumber) {
  if (sectionNumber === 0) {
    // If "Yes" button is clicked, show the "rules" section
    showRules();
  } else if (sectionNumber === 1) {
    // If "Let's go!" button is clicked, show the questions section
    showQuestions();
  }
}

startQuiz()


