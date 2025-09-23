

let Rock = rock;
let Paper = paper;
let Scissor = scissor;
let compchoice;
let humanchoice;
let message;
let i = 0;
let j = 0;

function getinput() {
    compchoice = Math.floor(Math.random() * 3);
    if(compchoice===0){
        console.log("Rock");
    }
    else if(compchoice === 1)
    {
        console.log("Paper");
    }
    else{
        console.log("Scissor");
    }

    message = prompt("Rock Paper Scissor Game \n - Rock = 0\n - Paper = 1\n - Scissor = 2");
    humanchoice = message.toLowerCase();
    console.log(humanchoice);

}

function playRound(a, b) {
    if (a === b) {
        console.log("Draw");
    }
    else if (a === Rock) {
        if (b === Paper) {
            console.log("Paper");
            console.log("Computer Wins: Paper beats Rock");
            compscore();
        }
        else {
            console.log("Scissor")
            console.log("Human Wins: Rock beats Scissor");
            humanscore();
        }
    }
    else if (a === Paper) {
        if (b === Scissor) {
            console.log("Computer Wins: Scissor beats Paper");
            compscore();
        }
        else {
            console.log("Human Wins: Rock beats Scissor");
            humanscore();
        }
    }
    else if (a === Scissor) {
        if (b === Rock) {
            console.log("Computer Wins: Rock beats Scissor");
            compscore();
        }
        else {
            console.log("Human Wins: Scissor beats Paper");
            humanscore();
        }
    }
}

function humanscore() {
    i = i + 1;
    console.log("Human Score "+i);

}

function compscore() {
    j = j + 1;
    console.log("Computer Score "+j);
}



function round() {
    for (let i = 1; i <= 5; i++) {
        getinput();
        playRound(humanchoice, compchoice);
    }
    console.log("Game Over !!!!");
    console.log("Total Human Score " + i);
    console.log("Total Computer Score " + j);
}

round();