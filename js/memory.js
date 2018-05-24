const icons = document.querySelectorAll(".icon");
let openCards = [];
const reset = document.querySelector(".reset");
const cards = [...document.querySelectorAll(".card")];
const cardList = document.querySelector('.card-list');
let shuffledArr = shuffle(cards);

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
function shuffle(cards) {
  var currentIndex = cards.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }

  return cards;
}

// needs work
shuffle(cards);
for (let i = 0; i < cards.length; i++) {
    cardList.innerHTML = "";
    for (let card of cards) {
        cardList.appendChild(card);
        card.classList.remove('open', 'show')
    }
}