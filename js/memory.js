const icons = document.querySelectorAll(".icon");
let openCards = [];
const reset = document.querySelector(".reset");
const cards = [...document.querySelectorAll(".card")];
const cardList = document.querySelectorAll(".cards-list");
let shuffledArr = shuffle(cards);

// shuffles cards and resets current game
reset.addEventListener("click", gameReset);

function gameReset() {
  shuffle(cards);
  openCards = [];
}

// loop to add event listeners to all cards
for (let card of cards) {
  card.addEventListener("click", function(e) {
    if (openCards.length < 2) {
      openCards.push(card);
      card.classList.add("open", "show");
    }
    
    if (openCards.length == 2) {
      setTimeout(function() {
        openCards.forEach(function(card) {
          card.classList.remove("open", "show");
        });
      }, 1000);
    }
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
