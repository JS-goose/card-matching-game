const icons = document.querySelectorAll(".icon");
const cards = [...document.querySelectorAll(".card")];
let openCards = [];
const reset = document.querySelector(".reset");

reset.addEventListener("click", gameReset);
// shuffles the "open cards"
function gameReset() {
  shuffle(cards);
  openCards = [];
}

// loop to add event listeners to all icons
icons.forEach(function(evt){
    this.addEventListener('click', addOpenCards);
});

// clicked cards are added to the open cards array for comparison
function addOpenCards(evt) {
  openCards.push(evt.target);
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
