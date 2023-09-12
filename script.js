function getComoputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelction) {

  // Making it case-insensitive(so user can input,rock,Rock,ROCK or any other variation)
  playerSelection = playerSelection.toLowerCase();
  computerSelction = computerSelction.toLowerCase();

  if (playerSelection === computerSelction) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelction === "scissor") ||
    (playerSelection === "scissors" && computerSelction === "paper") ||
    (playerSelection === "paper" && computerSelction === "rock")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelction}`;
  } else {
    return `Your Loose! ${computerSelction} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt(`Round ${round}:What would you choose rock, paper or Scissors?`);
    const computerSelction = getComoputerChoice();
    const result = playRound(playerSelection, computerSelction);
    
    console.log(`Round ${round}: ${result}`);

    if(result.includes('Win')) {
       playerScore++;
    } else if(result.includes('Loose')) {
      computerScore++;
    }
  }

   if (playerScore > computerScore) {
     console.log(`You win the game! Player: ${playerScore}, Computer: ${computerScore}`);
   } else if (playerScore < computerScore) {
     console.log(`You lose the game. Player: ${playerScore}, Computer: ${computerScore}`);
   } else {
     console.log(`It's a tie! Player: ${playerScore}, Computer: ${computerScore}`);
   }
}

game();