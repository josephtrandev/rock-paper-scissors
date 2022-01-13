const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let pick = choices[Math.floor(Math.random() * choices.length)];

    return pick;
}

/* function playerPlay() {
	let pick = prompt("Pick rock, paper, or scissors.");
	
	return pick.toLowerCase();
} */

function playRound(playerSelection, computerSelection) {
	let win = ('You win! ' + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + ' beats ' + computerSelection);
	let lose = ('You lose! ' + (computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)) + ' beats ' + playerSelection);
	let draw = ('Draw! ' + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + ' and '+ computerSelection + ' are the same');
	
    if (playerSelection == computerSelection) {
		result = draw;
		return result;
	}
    else if (playerSelection == 'rock') {
		switch(computerSelection) {
			case 'paper':
				result = lose;
				return result;
			case 'scissors':
				result = win;
				return result;
		}
    }
	else if (playerSelection == 'paper') {
        switch(computerSelection) {
			case 'scissors':
				result = lose;
				return result;
			case 'rock':
				result = win;
				return result;
		}
    }
	else if (playerSelection == 'scissors') {
        switch(computerSelection) {
			case 'rock':
				result = lose;
				return result;
			case 'paper':
				result = win;
				return result;
		}
    }
}

function game() {
	let currRound = 1
	let maxRounds = 5;
	let playerWins = 0;
	let computerWins = 0;
	let winner = "";
	
	
	
	while (true) {
		if (playerWins == Math.floor((maxRounds/2))+1) {
			winner = "PLAYER WINS";
			console.log(winner);
			return winner;
			break;
		}
		else if (computerWins == Math.floor((maxRounds/2))+1) {
			winner = "COMPUTER WINS";
			console.log(winner);
			return winner;
			break;
		} 
		
		console.log("Round " + currRound);
		computerSelection = computerPlay();
		console.log("Computer picks " + computerSelection);
		playerSelection = playerPlay();
		console.log("Player picks " + playerSelection);
		
		while (choices.indexOf(playerSelection.toLowerCase()) < 0) {
			alert('Invalid input.');
			playerSelection = playerPlay();
			console.log("Player picks " + playerSelection);
		}
		
		playRound(playerSelection, computerSelection);
		console.log(playRound(playerSelection, computerSelection));

		if (typeof result !== undefined) {
			if (result.includes("win")) {
				playerWins++;
				currRound++;
				console.log("Player wins: " + playerWins);
				console.log("Computer wins: " + computerWins);
				console.log(" ");
			}
			else if (result.includes("lose")) {
				computerWins++;
				currRound++;
				console.log("Player wins: " + playerWins);
				console.log("Computer wins: " + computerWins);
				console.log(" ");
			}
			else if (result.includes("same")) {
				console.log("Player wins: " + playerWins);
				console.log("Computer wins: " + computerWins);
				console.log(" ");
			}
		}
		
	}	
}

function buttonSelect(playerSelection) {
	computerSelection = computerPlay();
	
	var content = document.querySelector('#results');
	var newContent = document.createElement('div');
	newContent.setAttribute('id', 'results');
	newContent.textContent = playRound(playerSelection, computerSelection);
	content.parentNode.replaceChild(newContent, content);	
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
	buttonSelect('rock');
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
	buttonSelect('paper');
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function (playerSelection) {
	buttonSelect('scissors');
});

var results = document.querySelector('#results');
var gameStart = 'Select your choice: ';
results.innerHTML = gameStart;

//game();