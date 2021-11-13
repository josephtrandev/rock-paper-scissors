function computerPlay() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var pick = choices[Math.floor(Math.random() * choices.length)];

    return pick;
}

//console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        alert('Draw! ' + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + ' and '+ computerSelection.toLowerCase() + ' are the same');
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
        alert('You win! ' + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + ' beats ' + computerSelection.toLowerCase());
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
        alert('You lose! ' + computerSelection + ' beats ' + playerSelection.toLowerCase());
    }

}

const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));