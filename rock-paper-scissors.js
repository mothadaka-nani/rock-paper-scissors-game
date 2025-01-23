let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    lose: 0,
    tie: 0
};

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = 
        `Wins: ${score.wins}, Loses: ${score.lose}, Tie: ${score.tie}`;
}

updateScoreElement();

function pickCompMove() {
    const randN = Math.random();
    if (randN < 1 / 3) {
        return 'rock';
    } else if (randN < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playGame(playerChoose) {
    const computerMove = pickCompMove();
    let result = '';

    if (playerChoose === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else {
            result = 'You win';
        }
    } else if (playerChoose === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else {
            result = 'You lose';
        }
    } else if (playerChoose === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else {
            result = 'Tie';
        }
    }

    if (result === 'You win') {
        score.wins++;
    } else if (result === 'You lose') {
        score.lose++;
    } else {
        score.tie++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    // Update result and moves on the page
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = 
        `You picked
<img class="move-icon" src="${playerChoose}.png" > Computer picked
<img class="move-icon" src="${computerMove}.png" >`

    updateScoreElement();
}