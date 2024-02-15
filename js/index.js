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
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("You Missed.You lost a life");
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
