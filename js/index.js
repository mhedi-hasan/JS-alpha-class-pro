//
// function play() {
//   // step-->1: hide the home screen. to the hide screen and added class hidden
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add('hidden');
//   // step-->2: show the play-ground section
//   const playGroundSection=document.getElementById('play-ground');
//   playGroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  //   console.log("PlayerPressed:", playerPressed);

  // get the expectation to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  //   console.log(playerPressed, expectedAlphabet);

  //Check to match
  if (playerPressed === expectedAlphabet) {
    console.log("You got a point!");
    console.log("You have pressed correctly:", expectedAlphabet);
    // Update score
    // 1: get the current score
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScores = parseInt(currentScoreText);
    console.log(currentScores);
    // 2: increase the score by 1
    const newScore = currentScores + 1;
    // 3: show the Update score
    currentScoreElement.innerText = newScore;
    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("You Missed.You lost a life");
    //-->1: get the current life number
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    //-->2: reduce the life count
    const newLife = currentLife - 1;
    //-->3: display the update life count
    currentLifeElement.innerText = newLife;
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  // generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log("your random alphabet is :", alphabet);

  // set random alphabet in display
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  //set background color
  removesBackgroundColorById(alphabet);
}

function play() {
  hideElementId("home-screen");
  showElementId("play-ground");
  continueGame();
}
