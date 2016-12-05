console.log("JS file is connected to HTML! Woo!")

var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';
/* Four cards, two queens and two kings */

/* if (cardTwo === cardFour) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
} */

var board = document.getElementById('game-board');

function createCards() {
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('div');

		cardElement.className = 'card';

		board.appendChild(cardElement);
	}
}