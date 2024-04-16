let myAudio = document.querySelector('#audio')
let clickSound =
document.querySelector('#clickSound')
let computerMove;
function pickComputerMove() {
const randomNumber = Math.random();

   if (randomNumber >= 0 && randomNumber < 1/3 ) {
      computerMove = 'rock';
   } else if (randomNumber >= 1/3 && randomNumber < 2/3 ) {
      computerMove = 'paper';
   } else if (randomNumber >= 2/3 && randomNumber < 1 ) {
      computerMove = 'scissors';
      return computerMove;
   }
   

}

const score ={
   wins: 0,
   losses: 0,
   ties: 0
};
function playGame(playerMove) {

let result = '';
   if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
         result = 'You lose.';}
         if (computerMove === 'paper') {
         result = 'You win.';}
         if (computerMove === 'scissors') {
         result = 'Tie.';}
         }
         
        else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
         result = 'Tie.';}
         if (computerMove === 'paper') {
         result = 'You lose.';}
         if (computerMove === 'scissors') {
         result = 'You win.';}
         }
         
         else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
         result = 'You win.';}
         if (computerMove === 'paper') {
         result = 'Tie.';}
         if (computerMove === 'scissors') {
         result = 'You lose.';}
         }  
        
        if(playerMove === 'rock') {
           document.getElementById("yourMove").src = "rock1.png"
        }
        
        if(playerMove === 'paper') {
           document.getElementById("yourMove").src = "paper.png"
        }
        
        if(playerMove === 'scissors') {
           document.getElementById("yourMove").src = "scissors.png"
        }
        
       if(computerMove === 'rock') {
          document.getElementById("ComputerMove").src = "rock1.png"
       }
       
       if(computerMove === 'paper') {
          document.getElementById("ComputerMove").src = "paper.png"
       }
        
        if(computerMove === 'scissors') {
          document.getElementById("ComputerMove").src = "scissors.png"
       }
         document.getElementById("p2").innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result} `
         
        if(result === 'You win.') {
       score.wins += 1;
    }   else if(result === 'You lose.') {
       score.losses += 1;
       }
     else if(result === 'Tie.') {
       score.ties += 1;
       } document.getElementById("p3").innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
    
    myAudio.play()
    myAudio.volume = 0.5;
       
       document.getElementById("resetBtn").onclick =
       function () {
        score.wins =0;
        score.losses = 0;
        score.ties =0;           
        document.getElementById("p3").innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}` 
        
        myAudio.volume = 0;
  }   
}
