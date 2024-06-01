console.log("Hello World!");

function getHumanChoice() {
    humanChoice = prompt("Select your option(rock/paper/scissors):")
    return humanChoice;
}


function getComputerChoice() {
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

computerWins = 0;
humanWins = 0;
tie = 0;
function playRound(computerChoice, humanChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    
    if (humanChoice=="rock" && computerChoice=="paper"){
        computerWins += 1;
        return 'Computer Picked:'+computerChoice;
    }else if (humanChoice=="paper" && computerChoice=="scissors"){
        computerWins += 1;
        return 'Computer Picked:'+computerChoice;
    }
    else if (humanChoice=="scissors" && computerChoice=="rock"){
        computerWins += 1;
        return 'Computer Picked:'+computerChoice;
    }else if(humanChoice==computerChoice){
        tie += 1;
        return 'Computer Picked:'+computerChoice+'\n A tie!!!';
    }else{
        humanWins += 1;
        return 'Computer Picked:'+computerChoice;
    }

}

function playGame(){
    for(counter=0;counter<=4;counter++){
        playRound();
        alert("Computer chose: "+computerChoice);
    }

    if(computerWins > humanWins){
        return "COMPUTER WINS";
    }else if(computerWins==humanWins){
        return "A TIE!!";
    }else{
        return "YOU WIN \n Hooray!!";
    }
}

console.log(playGame());