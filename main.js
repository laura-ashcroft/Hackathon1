//rock vs scissors - rock wins
//rock vs paper - paper wins
//scissors vs paper - scissors wins
//scissors vs scissors - draw
//paper vs paper - draw
//rock vs rock - draw
//if playerMove is same as computerMove - draw
//win if playerMove = scissors, if computerMove = paper
//win if computerMove = rock, if playerMove = paper
//win if computerMove = paper, if playerMove = scissors
//lose if playerMove = paper, if computerMove = scissors
//lose if playerMove = rock, if computerMove = paper
//lose if computerMove = scissors, if playerMove = paper
//





/* 
    function - getWinner
    2 parameters - playerMove, computerMove
    run the if statements
    return 1 if player wins
    return 0 for a draw
    return -1 if player 1 loses
    save a result in a variable called result.

*/

/*
create a prompt to get userInput
let userInput = variable
if userPut === "rock" || "scissors" || "paper"
then call getWinner (else incorrect word)
userInput === player1
alert(result)
*/

/*
a new function for a random number (0, 1, 2)
have if statements to show what the random number will be assigned to
Math.floor(Math.random() * 3);
assign number to result of rock paper or scissors
new computerInput variable 
*/

/* 
Game Loop.
a while loop
variable -keepPlaying- that holds response from confirm box

*/

/*
how many games have been played
how many games have been won 
how many games have been lost
how many games have been drawn

display each value as an alert
*/

/* 
    get reference to all html elements
    get value from the radio buttons
    start the game with the go button
    update results area
    update the game stats
*/

let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;
let gamesDrawn = 0;
let scoreBoard = 0;

let resultArea = document.querySelector('#resultArea');
let plays = document.querySelector('#gamesPlayed');
let wins = document.querySelector('#gamesWon');
let lost = document.querySelector('#gamesLost');
let draws = document.querySelector('#gamesDrawn');
let score = document.querySelector('#score');
let startBtn = document.querySelector('#go');
let textInput = document.querySelector("#text");

startBtn.addEventListener('click', startGame);

function startGame() {
    gamesPlayed++;
    // get user input
    let userInput = userChoice();
    // get computer choice
    let computerInput = computerChoice();
    // run get winner and store result in a variable
    let result = getWinner(userInput, computerInput);
    // Set result message based on the result
    // update game stat variables
    let resultMessage;
    if(result === 1) {
        resultMessage = `${textInput.value} Won!`;
        gamesWon++;
        scoreBoard++;
    }else if(result === -1) {
        resultMessage = `${textInput.value} Lost!`;
        gamesLost++;
        scoreBoard--;
    } else if(result === 0) {
        resultMessage = `It was a draw!`;
        gamesDrawn++;
    }
    
    // display results.
    displayResults(resultMessage, computerInput);
}

function userChoice() {
    const rbs = document.querySelectorAll('input[name="game"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    return selectedValue;
}

function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "scissors";       
    };
    if (randomNumber === 1) {
        return "rock";
    };
    if (randomNumber === 2){
        return "paper";
    }
}

function getWinner(player1, player2) {
    if (player1 === player2) {
        //gamesDrawn++;
        return 0;
    };
    
    if (player1 === "rock" && player2 === "scissors"){
         //gamesWon++;
        //score++;
        return 1;
    } else if (player1 === "rock" && player2 === "paper"){
         //gamesLost++;
        //score--;
        return -1;
    };
    
    if (player1 === "scissors" && player2 === "paper"){
         //gamesWon++;
        //score++;
        return 1;
    } else if (player1 === "scissors" && player2 === "rock"){
        //gamesLost++;
        //score--;
        return -1;
    };
    
    if (player1 === "paper" && player2 === "rock"){
        //gamesWon++;
        //score++;
        return 1;
    } else if (player1 === "paper" && player2 === "scissors"){
        //gamesLost++;
        //score--;
        return -1;
    };
}

function displayResults(resultMessage, computerInput) {
    resultArea.innerText = `${resultMessage}  The computer chose: ${computerInput}`;
    wins.innerText = `Wins: ${gamesWon}`;
    lost.innerText = `Losses: ${gamesLost}`;
    draws.innerText = `Draws: ${gamesDrawn}`;
    plays.innerText = `Games Played: ${gamesPlayed}`;
    score.innerText = `Score: ${scoreBoard}`;
}








