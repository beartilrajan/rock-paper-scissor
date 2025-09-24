

let rock = 0;
let paper = 1;
let scissor = 2;
let compchoice;
let humanchoice;
let message;
let i = 0;
let j = 0;
let x;

function compchoicedisplay(b) {
    if (b === 0) {
        console.log("Computer Choice : Rock");
    }
    else if (b === 1) {
        console.log("Computer Choice : Paper");
    }
    else {
        console.log("Computer Choice : Scissor");
    }
}

function getinput() {
    compchoice = Math.floor(Math.random() * 3);
    message = prompt("Rock Paper Scissor Game \n - Rock = 0\n - Paper = 1\n - Scissor = 2");
    messagelower = message.toLowerCase();
    if (messagelower === 'rock') {
        humanchoice = 0;
        console.log("Human Choice : Rock");

    }
    else if (messagelower === 'paper') {
        humanchoice = 1;
        console.log("Human Choice : Paper");
    }
    else {
        humanchoice = 2;
        console.log("Human Choice : Scissor");
    }

}

function playRound(a, b) {
    if (a === b) {
        compchoicedisplay(b);
        console.log("Draw");
    }
    else if (a === rock) {
        if (b === paper) {
            compchoicedisplay(b);
            console.log("Computer Wins: Paper beats Rock");
            compscore();
        }
        else {
            compchoicedisplay(b);
            console.log("Human Wins: Rock beats Scissor");
            humanscore();
        }
    }
    else if (a === paper) {
        if (b === scissor) {
            compchoicedisplay(b);
            console.log("Computer Wins: Scissor beats Paper");
            compscore();
        }
        else {
            compchoicedisplay(b);
            console.log("Human Wins: Rock beats Scissor");
            humanscore();
        }
    }
    else if (a === scissor) {
        if (b === rock) {
            compchoicedisplay(b);
            console.log("Computer Wins: Rock beats Scissor");
            compscore();
        }
        else {
            compchoicedisplay(b);
            console.log("Human Wins: Scissor beats Paper");
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
    for (let c = 1; c <= 5; c++) {
        getinput();
        playRound(humanchoice, compchoice);
        console.log(" ");
    }
    console.log("Game Over !!!!");
    console.log(" ");
    console.log("Total Human Score " + i);
    console.log("Total Computer Score " + j);
}

round();