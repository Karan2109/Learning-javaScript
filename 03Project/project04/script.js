// let randomNumber = parseInt(Math.random() * 100 + 1);
// // console.log(randomNumber)

// const submit = document.querySelector("#subt");
// const userInput = document.querySelector("#guessField");
// const guessSlot = document.querySelector(".guesses");
// const remaining = document.querySelector(".lastResult");
// const lowOrHi = document.querySelector(".lowOrHi");
// const startOver = document.querySelector(".resultParas");

// const p = document.createElement("p");


// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//     submit.addEventListener("click", function(e) {
//         e.preventDefault();
//         const guess = parseInt(userInput.value);
//         console.log(guess);        
//         validateGuess(guess);
//     });
// }

// function validateGuess(guess) { 
//     // check the validation whether the guess is valid number or not
//     if (isNaN(guess)) {
//         alert("Please enter a valid number");
//     } else if (guess < 1) {
//         alert("Please enter a number greater than 1");
//     } else {
//         prevGuess.push(guess);
//         if(numGuess === 11) {
//             displayGuess(guess);
//             displayMessage(`Game Over! Random nuber was ${randomNumber}`);
//             endGame();
//         } else {
//             displayGuess(guess);
//             checkGuess(guess);
//         }
//     }
// }

// function checkGuess(guess) {
//     // guessed number is high or low
//     // if (guess === randomNumber) {
//     //     displayMessage("Congratulations! You guessed the correct number");
//     //     endGame();
//     // } else if (prevGuess.includes(guess)) {
//     //     alert("You've already guessed this number. Please try a different number");
//     // } else if (guess < randomNumber) {
//     //     displayMessage("Too low! Try again");
//     //     lowOrHi.textContent = "Too low!";
//     // } else {
//     //     displayMessage("Too high! Try again");
//     //     lowOrHi.textContent = "Too high!";
//     // }
//     // numGuess++;

//     if(guess === randomNumber) {
//         displayMessage("Congratulations! You guessed the correct number");
//         endGame();
//     } else if (guess < randomNumber) {
//         displayMessage("Too low! Try again");
//         // lowOrHi.textContent = "Too low!";
//     } else if (guess > randomNumber) {
//         displayMessage("Too high! Try again");
//         // lowOrHi.textContent = "Too high!";        
//     }
// }

// function displayGuess(guess) { //CleanUp guesss
//     // cleans the existing value & update the array accordingly
//     userInput.value = '';
//     guessSlot.innerHTML += `${guess} `;
//     numGuess++;
//     remaining.innerHTML = `You have ${11 - numGuess} guesses left`;
// }

// function displayMessage(message) {
//     // simply upadte the message
//     lowOrHi.innerHTML = `<h2>${message}</h2>`
// }

// function endGame() {
//     userInput.value = "";
//     userInput.setAttribute("disabled", "");
//     p.classList.add("button");
//     p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
//     startOver.appendChild(p);
//     playGame = false;
//     newGame();
// }

// function newGame()  {
//     const newGameButton = document.querySelector("#newGame");
//     newGameButton.addEventListener("click", function(e) {
//         // e.preventDefault();
//         randomNumber = parseInt(Math.random() * 100 + 1);
//         prevGuess = [];
//         numGuess = 1;
//         guessSlot.innerHTML = "";
//         remaining.innerHTML = `${11 - numGuess}`;
//         userInput.removeAttribute("disabled");
//         startOver.removeChild(p);

//         playGame = true;
//     });
// }

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}






