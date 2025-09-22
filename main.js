
let compchoice = Math.floor(Math.random() * 3);
console.log(compchoice);

let message = prompt("Rock Paper Scissor Game \n - Rock = 0\n - Paper = 1\n - Scissor = 2");

let humanchoice = parseInt(message);
console.log(humanchoice);

let Rock = 0;
let Paper = 1;
let Scissor = 2;

function playRound(a,b)
{
    if(a===b){
        console.log("Draw");
    }
    else if(a === Rock){
        if(b === Paper){
            console.log("Computer Wins: Paper beats Rock");
        }
        else{
            console.log("Human Wins: Rock beats Scissor");
        }
    }
    else if(a === Paper){
        if(b === Scissor){
            console.log("Computer Wins: Scissor beats Paper");
        }
        else{
            console.log("Human Wins: Rock beats Scissor");
        }
    }
    else if(a === Scissor){
        if(b === Rock){
            console.log("Computer Wins: Rock beats Scissor");  
        }
        else{
            console.log("Human Wins: Scissor beats Paper");
        }
    }
}

playRound(humanchoice,compchoice);