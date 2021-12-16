function computerPlay() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var pick = choices[Math.floor(Math.random() * choices.length)];

    return pick.toLowerCase();
}

//console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert('Draw! ' + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + ' and '+ computerSelection.toLowerCase() + ' are the same');
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        alert('You win! ' + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + ' beats ' + computerSelection.toLowerCase());
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        alert('You lose! ' + computerSelection + ' beats ' + playerSelection.toLowerCase());
    }

}

let playerSelection = prompt("Pick rock, paper, or scissors.").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));