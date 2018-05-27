let allCards = document.getElementsByClassName('card'); 
let cards = Array.from(allCards); //array of cards created from allCards
const cardList = document.querySelector(".cards-wrapper"); //card deck
let openCards = []; //array of open cards
let matchedCards = []; //array of matches
const resetButton = document.querySelector(".reset"); //reset button
let moves = 0;

document.onLoad = gameStart();

// loop over existing cards to display shuffled cards
function shuffledCards () {
  for (let i = 0; i < cards.length; i++) {
    cardList.innerHTML = "";
    // display shuffled cards
    for (let card of cards) {
      cardList.appendChild(card);
    }
  }
}

// Starts the game
function gameStart() {
  shuffledCards();
  shuffle(cards); 
}


// shuffles cards and resets current game
resetButton.addEventListener("click", gameReset);

// ***TODO*** Shuffle does not work when reset button is clicked 
function gameReset() { 
  gameStart();
  openCards.forEach(function (card){
    card.classList.remove('open','match','unclick','show');
    openCards = [];
  })
  matchedCards.forEach(function (card){
    card.classList.remove('open','match','unclick','show');
    matchedCards = [];
  })
  // restarts the timer
  // resets number of stars
}

// loop to add event listeners to all cards
for (let card of cards) {
  card.addEventListener("click", turnOver);
}

// Turns cards over and displays icon
function turnOver() {
  if (openCards.length < 2) {
    this.classList.add("open", "show", "unclick");
    openCards.push(this);
  }
  // shows cards in open cards array for 1 second if there are 2 cards
  if (openCards.length === 2) {
    cardMatches();
  }
}

// checks to see if matches exist
function cardMatches() {
  setTimeout(function() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("match");
      openCards[1].classList.add("match");
      matchedCards.push(openCards[0]);
      matchedCards.push(openCards[1]);
    } else {
      openCards[0].classList.remove("open", "show", "unclick");
      openCards[1].classList.remove("open", "show", "unclick");
    }
    openCards = [];
  }, 500);
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
