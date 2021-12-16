var choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    var pick = choices[Math.floor(Math.random() * choices.length)];

    return pick;
}

function playerPlay() {
	let pick = prompt("Pick rock, paper, or scissors.");
	
	return pick.toLowerCase();
}

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
playerSelection = playerPlay();
//console.log(playerSelection);

if (choices.indexOf(playerSelection.toLowerCase()) < 0) {
	alert('Invalid input.');
	playerSelection = playerPlay();
	//console.log(playerSelection);
}

console.log(playRound(playerSelection, computerSelection));