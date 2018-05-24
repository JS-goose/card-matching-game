const icons = document.querySelector('.cards-wrapper');
const cards = [...document.querySelectorAll('.card')];
const openCards = [];

// remove the hidden class from cards and push clicked card to openCards array
function removeHidden(evt) {
    evt.target.firstElementChild.classList.toggle('hidden');
    openCards.push(evt.target);  
}

icons.addEventListener('click', removeHidden);

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}