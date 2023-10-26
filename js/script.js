var humanScore = 0;
var computerScore = 0;
var currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, targetGuess) {
    let humanDifferance = Math.abs(targetGuess - humanGuess);
    let computerDifferance = Math.abs(targetGuess - computerGuess);

        return humanDifferance <= computerDifferance;
}

const updateScore = winner => {
    winner = winner.toLowerCase();

    if(winner === 'human'){
        humanScore++;
    } else if(winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;