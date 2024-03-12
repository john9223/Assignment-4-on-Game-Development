// Iteration 2: Generating two random numbers (0 to 100) and displaying them in the game.html
var num1 = Math.round(Math.random() * 100);
const num1Box = document.getElementById("number1");

var num2 = Math.round(Math.random() * 100);
const num2Box = document.getElementById("number2");

// Iteration 3: Creating variables required to make the game functional
var operation;
var score = 0;
const addBtn = document.getElementById("plus");
const subBtn = document.getElementById("minus");
const mulBtn = document.getElementById("mul");
const divBtn = document.getElementById("divide");
const remBtn = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the HTML element with the ID "number3"
var resultBox = document.getElementById("number3");
var result;

// Iteration 5: Creating a function to randomize numbers and operations for the game
function randomize() {
  num1 = Math.round(Math.random() * 100);
  num2 = Math.round(Math.random() * 100);

  if (num1 < num2) {
    var temp = num1;
    num1 = num2;
    num2 = temp;
  }

  operation = Math.round(Math.random() * 5);
  switch (operation) {
    case 1:
      result = num1 + num2;
      break;

    case 2:
      result = num1 - num2;
      break;

    case 3:
      result = num1 * num2;
      break;

    case 4:
      result = Math.floor(num1 / num2);
      break;

    case 5:
      result = num1 % num2;
      break;

    case 0:
      randomize();
  }

  num1Box.innerHTML = num1;
  num2Box.innerHTML = num2;
  resultBox.innerHTML = result;

  console.log(num1 + " " + num2 + " " + result + " " + operation);
}

randomize();

// Iteration 6: Making the Operators (buttons) functional
function checkAnswer(operator, operationFunction) {
  if (operationFunction(num1, num2) === result) {
    score++;
    randomize();
    resetTimer(timerId);
  } else {
    location.href = "gameover.html?score=" + score;
  }
}

addBtn.onclick = () => checkAnswer("+", (a, b) => a + b);
subBtn.onclick = () => checkAnswer("-", (a, b) => a - b);
mulBtn.onclick = () => checkAnswer("*", (a, b) => a * b);
divBtn.onclick = () => checkAnswer("/", (a, b) => Math.floor(a / b));
remBtn.onclick = () => checkAnswer("%", (a, b) => a % b);

// Iteration 7: Making the Timer functional
var time = 20;
var timerId;
const timer = document.getElementById("timer");

function startTimer() {
  time = 20;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) location.href = "./gameover.html?score=" + score;
    timer.innerHTML = time;
  }, 1000);
}

function resetTimer(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();
