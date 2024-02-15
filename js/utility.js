function hideElementId(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementId(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function getARandomAlphabet(){
    // get or create an alphabet
    const alphabetString='qwertyuiopasdfghjklzxcvbnm/';
    const alphabets=alphabetString.split('');
    // console.log(alphabets)

    //get a random index between 0-26
    const randomNumber=Math.random() * 25;
    const index=Math.round(randomNumber);
    
    const alphabet=alphabets[index];
    // console.log(alphabet);
    return alphabet;
}