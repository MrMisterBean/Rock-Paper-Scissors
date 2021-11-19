let rps = [
    'rock',
    'paper',
    'scissors'
]

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function computerPlay(){
    return randomChoice(rps)
}

function round(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase()

    function messageWin(){
        console.log("You win! " + playerSelection + " beats " + computerSelection)
    }

    function messageLoss(){
        console.log("You lose! " + playerSelection + " loses to " + computerSelection)
    }

    function messageTie(){
        console.log("You tie! " + playerSelection + " is the same as " + computerSelection)
    }

    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            messageTie()
        }
        else if (computerSelection == 'paper') {
            messageLoss()
        }
        else if (computerSelection == 'scissors') {
            messageWin()
        }
    }

    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            messageWin()
        }
        else if (computerSelection == 'paper') {
            messageTie()
        }
        else if (computerSelection == 'scissors') {
            messageLoss()
        }
    }

    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            messageLoss()
        }
        else if (computerSelection == 'paper') {
            messageWin()
        }
        else if (computerSelection == 'scissors') {
            messageTie()
        }
    }
    
    else {
        console.log('Please check your spelling: ' + "'" + playerSelection + "'" + ' does not seem to be correct...')
    }
}

round(prompt('Rock paper scissors?'), computerPlay())