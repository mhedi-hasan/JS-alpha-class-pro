//
// function play() {
//   // step-->1: hide the home screen. to the hide screen and added class hidden
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add('hidden');
//   // step-->2: show the play-ground section
//   const playGroundSection=document.getElementById('play-ground');
//   playGroundSection.classList.remove('hidden')
// }

function continueGame(){
    // generate a random alphabet
    const alphabet=getARandomAlphabet();
    console.log('your random alphabet is :',alphabet)

    // set random alphabet in display
    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;
    //set background color
    setBackgroundColorById(alphabet)
}

function play(){
    hideElementId('home-screen')
    showElementId('play-ground')
    continueGame()
}