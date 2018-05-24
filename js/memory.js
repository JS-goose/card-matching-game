const icons = document.querySelector('.cards');

function removeHidden(evt) {
    evt.target.firstElementChild.classList.toggle('hidden');
    console.log("working");
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