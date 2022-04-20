//------------------------------------------------------ LISTENERS
let newGame = document.getElementById('newGame');
let rollDice = document.getElementById('rollDice');
let hold = document.getElementById('hold');
let activePlayer1 = document.getElementById('player1');
let activePlayer2 = document.getElementById('player2');
let rules = document.getElementById('rules');

//------------------------------------------------------ VARIABLES
let diceNumber;
let activePlayer = 'player1';
let currentScore1 = 0;
let currentScore2 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
activePlayer1.classList.add('activePlayer');

//------------------------------------------------------ FONCTIONS
// Change of activePlayer
function switchPlayer() {
  if (activePlayer === 'player1') {
    activePlayer2.classList.add('activePlayer');
    activePlayer1.classList.remove('activePlayer');
    activePlayer = 'player2';
  } else {
    activePlayer1.classList.add('activePlayer');
    activePlayer2.classList.remove('activePlayer');
    activePlayer = 'player1';
  }
}
// HOLD : CURRENT is add to TOTALSCORE + Change activePlayer
function addCurrentToTotalScore() {
  if (activePlayer === 'player1') {
    totalScore1 += currentScore1;
    document.getElementById('totalScore1').innerText=totalScore1;
    currentScore1 = 0;
    document.getElementById('currentScore1').innerText=currentScore1;
    if (totalScore1 >= 100) {
      gameOver();
    }
  } else {
    totalScore2 += currentScore2;
    document.getElementById('totalScore2').innerText=totalScore2;
    currentScore2 = 0;
    document.getElementById('currentScore2').innerText=currentScore2;
    if (totalScore2 >= 100) {
      gameOver();
    }
  };
  switchPlayer();
}
// ROLL DICE : Random number between 1 and 6 includes
function diceNumberFunction() {
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  // Display dice picture
  switch(diceNumber) {
    case 1:
      document.getElementById('de').style.backgroundImage = "url('Images/animate1.gif')";
      break;
    case 2:
      document.getElementById('de').style.backgroundImage = "url('Images/animate2.gif')";
      break;
    case 3:
      document.getElementById('de').style.backgroundImage = "url('Images/animate3.gif')";
      break;
    case 4:
      document.getElementById('de').style.backgroundImage = "url('Images/animate4.gif')";
      break;
    case 5:
      document.getElementById('de').style.backgroundImage = "url('Images/animate5.gif')";
      break;
    case 6:
      document.getElementById('de').style.backgroundImage = "url('Images/animate6.gif')";
      break;
  }
  // Delay the CURRENT display
  function delayedDisplayeCurrent() {
    let timeoutID = window.setTimeout(displayCurrent, 1500);
  }
  delayedDisplayeCurrent();
  function displayCurrent() {
    if (diceNumber === 1) { // if diceNumber = 1 -> CURRENT = 0 + change Player  
      if (activePlayer === 'player1') {
        currentScore1 = 0;
        document.getElementById('currentScore1').innerText=currentScore1;
      } else {
        currentScore2 = 0;
        document.getElementById('currentScore2').innerText=currentScore2;
      }
      switchPlayer();
    } else {
      if (activePlayer === 'player1') {
        currentScore1 += diceNumber;
        document.getElementById('currentScore1').innerText=currentScore1;
      } else {
        currentScore2 += diceNumber;
        document.getElementById('currentScore2').innerText=currentScore2;
      };
    };
  }
}
// GAME OVER if TOTALSCORE >= 100
function gameOver(e) {
  activePlayer1.classList.remove('activePlayer');
  activePlayer2.classList.remove('activePlayer');
  if (activePlayer === 'player1') {
    activePlayer1.classList.add('activePlayerWinner');
  } else {
    activePlayer2.classList.add('activePlayerWinner');
  }
  rollDice.removeEventListener('click', diceNumberFunction);
  hold.removeEventListener('click', addCurrentToTotalScore);
  document.getElementById('de').style.backgroundImage = "url('Images/gameOver.jpg')";
  e.stopPropagation();
}
// Display Dice
function resetDisplay () {
  document.getElementById('de').style.backgroundImage = "url('Images/de3.jpg')";
}
//---------------------------------------------------- EVENTS LISTENERS
// Throw the dice
rollDice.addEventListener('click', () => {
  resetDisplay();                            // Doesn't work !!
  diceNumberFunction();
});
// HOLD the Current
hold.addEventListener('click', addCurrentToTotalScore);
// NEW GAME : Initialisation des scores
newGame.addEventListener('click', () => {
  location.reload();
});
// RULES
import {displayRules} from '/Modules/displayRules.js';
rules.addEventListener('click', displayRules);
