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

    if (playerSelection == 'paper') {
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

    if (playerSelection == 'scissors') {
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
}

round(prompt('Rock paper scissors?'), computerPlay())