const reset = document.querySelector(".reset"); // reset button
const cards = [...document.querySelectorAll(".card")]; //array of cards
const cardList = document.querySelector(".cards-wrapper"); //card deck
let openCards = [];
let matchedCards = [];

document.onLoad = gameStart();

// shuffles cards and resets current game
reset.addEventListener("click", gameReset);

function gameReset() {
  shuffle(cards);
  openCards = [];
}

// Starts the game
function gameStart() {
  let shuffledArr = shuffle(cards); // variable to hold shuffled deck

  // Loop over existing cards
  for (let i = 0; i < cards.length; i++) {
    cardList.innerHTML = "";
    // display shuffled cards
    for (let card of cards) {
      cardList.appendChild(card);
    }
  }
}

// loop to add event listeners to all cards
for (let card of cards) {
  card.addEventListener("click", turnOver);
}

// Turns cards over and displays icon
function turnOver() {
  if (openCards.length < 2) {
    this.classList.add('open','show','unclick');
    openCards.push(this);
  }
  // shows cards in open cards array for 1 second if there are 2 cards
  if (openCards.length === 2) {
    cardMatches();
  }
}
// TODO - If I click any card twice, it is pushed to the matched cards array
// checks to see if matches exist
function cardMatches () {
  setTimeout(function() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add('match');
      openCards[1].classList.add('match');
      matchedCards.push(openCards[0]);
      matchedCards.push(openCards[1]);
    } else {
      openCards[0].classList.remove('open','show','unclick');
      openCards[1].classList.remove('open','show','unclick');
    }
    openCards = [];
  }, 500);
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