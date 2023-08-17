const questions = [
  {
    question: "what colour is a banana?",
    answers: [
      { text: "red", correct: false },
      { text: "brown", correct: false },
      { text: "Yellow", correct: true },
      { text: "blue", correct: false },
    ],
  },
  {
    question: "who has the biggest Glizzy in the world",
    answers: [
      { text: "Ronaldo", correct: false },
      { text: "Jamal", correct: true },
      { text: "Messi", correct: false },
      { text: "Sam", correct: false },
    ],
  },
];

const questionsElement = document.getElementsByClassName("questionsHere");
const answerElement = document.getElementsByClassName("answerWrapper");
const nextBtn = document.getElementsById("next-btn");

let currentQuestionIndex = 0;
let currentScore = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  currentScore = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}
