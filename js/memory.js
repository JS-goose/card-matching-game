const icons = document.querySelector('.cards-wrapper');
const cards = [...document.querySelectorAll('.card')];
const openCards = [];
const reset = document.querySelector('.reset');

reset.addEventListener('click', gameReset);
// shuffles the "open cards"
function gameReset() {
    shuffle(cards);
}

/* Removed the need for a function to toggle the .hidden class, will rework later */
icons.addEventListener('click',);

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