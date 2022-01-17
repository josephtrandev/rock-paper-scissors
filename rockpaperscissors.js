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

function checkWin() {
	let currRound = 1;
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
		
		/* console.log("Round " + currRound);
		computerSelection = computerPlay();
		console.log("Computer picks " + computerSelection);
		playerSelection = playerPlay();
		console.log("Player picks " + playerSelection);
		
		playRound(playerSelection, computerSelection);
		console.log(playRound(playerSelection, computerSelection)); */
		
	}	
}

const score = document.getElementById('score');
	
const player = document.createElement('p');
player.setAttribute('id', 'player');
player.textContent = "Player - 0";

const cpu = document.createElement('p');
cpu.setAttribute('id', 'cpu');
cpu.textContent = "CPU - 0";

score.appendChild(player);
score.appendChild(cpu);

function buttonSelect(playerSelection) {
	computerSelection = computerPlay();
	
	var content = document.getElementById('results');
	var newContent = document.createElement('div');
	newContent.setAttribute('id', 'results');
	newContent.textContent = playRound(playerSelection, computerSelection);
	content.parentNode.replaceChild(newContent, content);	
	scoreUpdate(result);
}

const rock = document.getElementById('rock');
rock.addEventListener('click', () => {
	buttonSelect('rock');
});

const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
	buttonSelect('paper');
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', function (playerSelection) {
	buttonSelect('scissors');
});

function scoreUpdate(result) {
	if (result.includes("win")) {
		const playerScore = document.getElementById('player');
		const pNum = playerScore.innerText;
		playerScore.innerText = 'Player - ' + (parseInt(pNum.slice(-1)) + 1);
	}
	else if (result.includes("lose")) {
		const cpuScore = document.getElementById('cpu');
		const cNum = cpuScore.innerText;
		cpuScore.innerText = 'CPU - ' + (parseInt(cNum.slice(-1)) + 1);
	}
}

var results = document.getElementById('results');
var gameStart = 'Select your choice: ';
results.innerHTML = gameStart;