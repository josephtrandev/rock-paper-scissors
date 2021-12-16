function computerPlay() {
    var choices = ['Rock', 'Paper', 'Scissors'];
    var pick = choices[Math.floor(Math.random() * choices.length)];

    return pick.toLowerCase();
}

function playerPlay() {
	let playerSelection = prompt("Pick rock, paper, or scissors.");
	
	return playerSelection.toLowerCase();
}

//if (choices1.indexOf(playerSelection) !== -1) {
//		let playerSelection = prompt("Invalid input. \nPick rock, paper, or scissors.");
//}

function playRound(playerSelection, computerSelection) {	
    if (playerSelection == computerSelection) {
        alert('Draw! ' + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + ' and '+ computerSelection + ' are the same');
    }
    else if (computerSelection == 'rock') {
		switch(playerSelection) {
			case 'paper':
				alert('You win! ' + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + ' beats ' + computerSelection);
				break;
			case 'scissors':
				alert('You lose! ' + (computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)) + ' beats ' + playerSelection);
				break;
		}
    }
	else if (computerSelection == 'paper') {
        switch(playerSelection) {
			case 'scissors':
				alert('You win! ' + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + ' beats ' + computerSelection);
				break;
			case 'rock':
				alert('You lose! ' + (computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)) + ' beats ' + playerSelection);
				break;
		}
    }
	else if (computerSelection == 'scissors') {
        switch(playerSelection) {
			case 'rock':
				alert('You win! ' + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + ' beats ' + computerSelection);
				break;
			case 'paper':
				alert('You lose! ' + (computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)) + ' beats ' + playerSelection);
				break;
		}
    }
}

const computerSelection = computerPlay();
//console.log(computerSelection);
const playerSelection = playerPlay();
//console.log(playerSelection);

console.log(playRound(playerSelection, computerSelection));