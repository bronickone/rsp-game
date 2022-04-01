 const container = document.querySelector('.container');
        const roundResults = document.querySelector('.roundResults');
        const roundInfo = document.querySelector('.roundInfo');
        const gameInfo = document.querySelector('.gameInfo');
        const gameOver = document.querySelector('.gameOver');
        const symbolInfo = document.querySelector('.symbol');
             
        let playerScore = 0;
        let computerScore = 0;

        function computerPlay() {
          let randomChoice = (Math.floor(Math.random() * 3) + 1);
          if (randomChoice === 1) randomChoice = ('rock');
          else if (randomChoice === 2) randomChoice = ('scissors');
          else randomChoice = ('paper');
          return (randomChoice);
        }
        
        function roundPlay(playerSelection, computerSelection){
          roundInfo.textContent = `Computer pick ${computerSelection}`;
          if (computerSelection === 'rock') symbolInfo.textContent = '✊'
          if (computerSelection === 'paper') symbolInfo.textContent = '✋'
          if (computerSelection === 'scissors') symbolInfo.textContent = '✌'
                  if (playerSelection === computerSelection) {
            roundResults.textContent = 'Draw round!';
          }

          else if (( playerSelection === 'rock' && computerSelection === 'scissors') || 
                   ( playerSelection === 'scissors' && computerSelection === 'paper') ||
                   ( playerSelection === 'paper' && computerSelection === 'rock')) {
            playerScore = ++playerScore;
            roundResults.textContent = 'You win this round - ' + playerSelection + ' beats ' + computerSelection +'!';          
          }

          else {
            computerScore = ++computerScore;
            roundResults.textContent = 'You lose this round - ' + computerSelection + ' beats ' + playerSelection +'!';               
          }     
        }
        
        const buttons = document.querySelectorAll('button');
        
        buttons.forEach((button) => {   
          button.addEventListener('click', () => {
          let compSel = computerPlay();
          let playSel = button.id;
          roundPlay(playSel, compSel);
          game();
          });
        });
       
        function game() {
          gameInfo.textContent = `Player - ${playerScore} Computer - ${computerScore}`;
          if (playerScore === 5) 
          {gameOver.textContent = 'PLAYER WIN!'; container.style.display = 'none';}
          else if (computerScore === 5)
          {gameOver.textContent = 'COMPUTER WIN!'; container.style.display = 'none';}
        }      