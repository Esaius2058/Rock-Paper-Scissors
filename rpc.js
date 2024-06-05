console.log("Rock Paper Scissors Tango!!!");

/*function getHumanChoice() {
    humanChoice = prompt("Select your option(rock/paper/scissors):")
    return humanChoice;
}*/


const getComputerChoice = () => {
    //A random whole number between 1 and 9 (inclusive)
    number = Math.floor((Math.random() * 9) +1);
    if (number<=3){
        computerChoice = "rock";
    }else if (number>=4 && number<=6) {
        computerChoice = "paper";
    }else if (number>=7 && number<=9){
        computerChoice = "scissors";
    }
    return computerChoice
}

let computerWins = 0;
let humanWins = 0;
let tie = 0;
let counter = 0;
function playRound(computerChoice, humanChoice){
    
    if (humanChoice=="rock" && computerChoice=="paper"){
        computerWins ++;
        return console.log('Computer Picked:'+computerChoice);
    }else if (humanChoice=="paper" && computerChoice=="scissors"){
        computerWins ++;
        return console.log('Computer Picked:'+computerChoice);
    }
    else if (humanChoice=="scissors" && computerChoice=="rock"){
        computerWins ++;
        return console.log('Computer Picked:'+computerChoice);
    }else if(humanChoice==computerChoice){
        tie ++;
        return console.log('Computer Picked:'+computerChoice);
    }else{
        humanWins ++;
        return console.log('Computer Picked:'+computerChoice);
    }
}



const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.style.backgroundColor = "blue";
paper.style.backgroundColor = "blue";
scissors.style.backgroundColor = "blue";

rock.addEventListener('click', () => {
    playRound(getComputerChoice(), "rock")
})

paper.addEventListener('click', () => {
    playRound(getComputerChoice(), "paper")
})

scissors.addEventListener('click', () => {
    playRound(getComputerChoice(), "scissors")
})

const btn = document.createElement("button");
btn.style.backgroundColor = "royalblue";
btn.addEventListener('click', () => {
    if(computerWins > humanWins){
        return console.log("Computer wins. \n Let's play one more game to settle this ;)");
    }else if (humanWins > computerWins){
        return console.log("YOU WIN \n Hurray!!!");
    }else{
        return console.log("A TIE!! \n Let's play one more game to settle this ;)");
    }
})
btn.textContent = "Results";
btn.style.marginTop = "5px";

const division = document.createElement("div");
division.style.height = "150px";
division.appendChild(btn);
document.body.appendChild(division);