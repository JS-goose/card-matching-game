const icons = document.querySelectorAll(".icon");
let openCards = [];
const reset = document.querySelector(".reset");
const cards = [...document.querySelectorAll(".card")];

reset.addEventListener("click", gameReset);
// shuffles the "open cards"
function gameReset() {
  shuffle(cards);
  openCards = [];
}

// loop to add event listeners to all cards
for (let card of cards) {
    card.addEventListener("click", function() {
        card.classList.add('open','show');
        openCards.push(card);
    });
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
