const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const alreadyDone = document.querySelectorAll(".btn");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  setInterval(updateCOuntdown, 1000);
  //i did this by myself, it should work but it wasnt working yesterday :(
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);

  if (correct) {
    userScore++;
  }
  //this right is for the score at the bottom of the code.
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
    if (selectedButton === correct) {
    } else {
      selectedButton.style.color = "white";
      selectedButton.style.backgroundColor = "red";
    }
  });

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    console.log(`${userScore}/${questions.length}`);
    userScore = 0;
    // i added the scoring system right here (up arrow right)
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  } // the email function should be right here becaUSE this says when the test is finished remove hide somewhere and restarts
}
//writing my own function for the one the user selected(wish me luck) i had to move my function up by a couple lines

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
//settting the right and wrong class in the css, i think making the backgrounds diffirent colours

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
  {
    question: "how big is yout glizzy",
    answers: [
      { text: "small (sigh)", correct: true },
      { text: "microphobia type", correct: true },
      { text: "average", correct: false },
      { text: "extra tonka", correct: false },
    ],
  },
  {
    question: "do you like men?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },
  {
    question: "whats your favourite word?",
    answers: [
      { text: "nigga", correct: true },
      { text: "glizzy", correct: false },
    ],
  },
];

const startingTime = 60;
let timer = startingTime * 60;

const time = document.getElementById("time");

function updateCOuntdown() {
  const minutes = Math.floor(timer / 60);
  let seconds = timer % 60;

  time.innerHTML = `${minutes}:${seconds}`;

  timer--;
  // the day after installing this feature, it started randomly working like wtf but aii this is coding for gang!!!!!!
}

//trying to add a scoring system innit bruv :)
let userScore = 0;
function resetScore() {}
