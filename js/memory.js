const reset = document.querySelector(".reset"); // reset button
const cards = [...document.querySelectorAll(".card")]; //array of cards
const cardList = document.querySelector(".cards-wrapper"); //card deck
let openCards = [];

document.onLoad = gameStart();
// shuffles cards and resets current game
reset.addEventListener("click", gameReset);

function gameReset() {
  shuffle(cards);
  openCards = [];
}

// Starts the game
function gameStart() {
  // Loop over existing cards
  let shuffledArr = shuffle(cards);

  for (let i = 0; i < cards.length; i++) {
    cardList.innerHTML = "";
    for (let card of cards) {
      cardList.appendChild(card);
    }
    // display shuffled cards
  }
}


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
