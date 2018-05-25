const reset = document.querySelector(".reset"); // reset button
const cards = [...document.querySelectorAll(".card")]; //array of cards
const cardList = document.querySelector('cards-list'); //card deck
let openCards = [];
let shuffledArr = shuffle(cards);

// shuffles cards and resets current game
reset.addEventListener("click", gameReset);

function gameReset() {
  shuffle(cards);
  openCards = [];
}

// Starts the game
function gameStart() {}
gameStart();

// loop to add event listeners to all cards
for (let card of cards) {
  card.addEventListener("click", function(e) {
    // Displays card icon and pushes to open cards array
    if (openCards.length < 2) {
      card.classList.add("open", "show");
      openCards.push(card);
    }
    // shows cards in open cards array for 1 second if there are 2 cards
    if (openCards.length == 2) {
      setTimeout(function() {
        openCards.forEach(function(card) {
          card.classList.remove("open", "show");
        });
        openCards = [];
      }, 700);
    }
  });
}

// Loop over existing cards
for (let i = 0; i < cards.length; i++) {
  
  for (let card of cards) {
  }
  // display shuffled cards
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
