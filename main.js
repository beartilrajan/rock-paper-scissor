
let b;
let compchoice = b;
let humanchoice;
let message;
let i = 0;
let j = 0;
let x;



function compchoicedisplay() {
    const bot = document.getElementById("bot");
    compchoice = Math.floor(Math.random() * 3);
    if (compchoice === 0) {
        compchoice = "rock";
        bot.textContent = "Computer Choice : Rock";
    }
    else if (compchoice === 1) {
        compchoice = "paper";
        bot.textContent = "Computer Choice : Paper";
    }
    else {
        compchoice = "scissor";
        bot.textContent = "Computer Choice : Scissor";
    }
}

function getinput() {

    const input = document.getElementById("input")
    const Rock = document.getElementById("Rock");
    Rock.addEventListener("click", function (e) {
        Rock.textContent = "Rock";
        input.textContent = "Human choice : Rock";
        humanchoice = "rock";
        compchoicedisplay();
        playRound(humanchoice, compchoice);
    })


    const Paper = document.getElementById("Paper");
    Paper.addEventListener("click", function (e) {
        Paper.textContent = "Paper";
        input.textContent = "Human choice : Paper";
        humanchoice = "paper";
        compchoicedisplay();
        playRound(humanchoice, compchoice);
    })

    const Scissor = document.getElementById("Scissor");
    Scissor.addEventListener("click", function (e) {
        Scissor.textContent = "Scissor";
        input.textContent = "Human choice : Scissor";
        humanchoice = "scissor";
        compchoicedisplay();
        playRound(humanchoice, compchoice);
    })

}




function playRound(a, b) {
    const result = document.getElementById("result");
    if (a === b) {
        result.textContent = "Draw";
    }
    else if (a === "rock") {
        if (b === "paper") {
            result.textContent = "Computer Wins: Paper beats Rock";
            compscore();
        }
        else {
            result.textContent = "Human Wins: Rock beats Scissor";
            humanscore();
        }
    }
    else if (a === "paper") {
        if (b === "scissor") {
            result.textContent = "Computer Wins: Scissor beats Paper";
            compscore();
        }
        else {
            result.textContent = "Human Wins: Paper beats Rock";
            humanscore();
        }
    }
    else if (a === "scissor") {
        if (b === "rock") {
            result.textContent = "Computer Wins: Rock beats Scissor";
            compscore();
        }
        else {
            result.textContent = "Human Wins: Scissor beats Paper";
            humanscore();
        }
    }
}

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