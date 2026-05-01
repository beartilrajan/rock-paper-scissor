let humanScore = 0;
let computerScore = 0;
let compchoice = "";
let humanchoice = "";

function updateScoreDisplay() {
  document.getElementById("humanScore").textContent = humanScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function humanscore() {
  humanScore++;
  updateScoreDisplay();
}

function compscore() {
  computerScore++;
  updateScoreDisplay();
}

function compchoicedisplay() {
  const bot = document.getElementById("bot");
  compchoice = Math.floor(Math.random() * 3);
  if (compchoice === 0) {
    compchoice = "rock";
    bot.textContent = "Computer Choice : Rock";
  } else if (compchoice === 1) {
    compchoice = "paper";
    bot.textContent = "Computer Choice : Paper";
  } else {
    compchoice = "scissor";
    bot.textContent = "Computer Choice : Scissor";
  }
}

function getinput() {
  const input = document.getElementById("input");
  const Rock = document.getElementById("Rock");
  Rock.addEventListener("click", function (e) {
    Rock.textContent = "Rock";
    input.textContent = "Your Choice : Rock";
    humanchoice = "rock";
    compchoicedisplay();
    playRound(humanchoice, compchoice);
  });

  const Paper = document.getElementById("Paper");
  Paper.addEventListener("click", function (e) {
    Paper.textContent = "Paper";
    input.textContent = "Your Choice : Paper";
    humanchoice = "paper";
    compchoicedisplay();
    playRound(humanchoice, compchoice);
  });

  const Scissor = document.getElementById("Scissor");
  Scissor.addEventListener("click", function (e) {
    Scissor.textContent = "Scissor";
    input.textContent = "Your Choice : Scissor";
    humanchoice = "scissor";
    compchoicedisplay();
    playRound(humanchoice, compchoice);
  });
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateScoreDisplay();
  document.getElementById("input").textContent = "";
  document.getElementById("bot").textContent = "";
  document.getElementById("result").textContent = "Make your choice!";
}

function playRound(a, b) {
  const result = document.getElementById("result");
  if (a === b) {
    result.textContent = "Draw - Both chose " + a;
  } else if (a === "rock") {
    if (b === "paper") {
      result.textContent = "Computer Wins! Paper beats Rock";
      compscore();
    } else {
      result.textContent = "You Win! Rock beats Scissor";
      humanscore();
    }
  } else if (a === "paper") {
    if (b === "scissor") {
      result.textContent = "Computer Wins! Scissor beats Paper";
      compscore();
    } else {
      result.textContent = "You Win! Paper beats Rock";
      humanscore();
    }
  } else if (a === "scissor") {
    if (b === "rock") {
      result.textContent = "Computer Wins! Rock beats Scissor";
      compscore();
    } else {
      result.textContent = "You Win! Scissor beats Paper";
      humanscore();
    }
  }
}

// Initialize the game
getinput();
updateScoreDisplay();

// Add reset button functionality
document.getElementById("resetBtn").addEventListener("click", resetGame);

function humanscore() {
  i = i + 1;
  console.log("Human Score " + i);
}

function compscore() {
  j = j + 1;
  console.log("Computer Score " + j);
}

function round() {
  getinput();
}

round();
