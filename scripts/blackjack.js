var gameState = {};
gameState['cards'] = {};
gameState['total'] = {};
gameState['cards']['player'] = [];
gameState['total']['player'] = 0;
gameState['cards']['dealer'] = [];
gameState['total']['dealer'] = 0;

randomCard = function() {
	var key = Math.floor(Math.random() * deck.length);
	return deck[key];
}

startGame = function() {
	gui.drawDealButtons();

	$("#deal").click(function() {
		startRound();
	});
}

startRound = function() {
	gui.drawRoundButtons();
	gui.drawCardArea();

	$("#hit").click(function() {
		hit();
	});
	$("#stay").click(function() {
		alert('Stay pressed');
	});

	hitCard('player', true);
	hitCard('player', true);
	hitCard('dealer', true);
	hitCard('dealer', false);

	gui.drawCards();
	updateTotal();
	gui.updateStatus();
}

hit = function() {
	hitCard('player', true);
	gui.drawCards();
	updateTotal();
	gui.updateStatus();
}

hitCard = function(who, visible) {
	card = randomCard();
	card.visible = visible;
	gameState['cards'][who].push(card);
}

updateTotal = function()
{
	gameState['total']['player'] = calculateTotal(gameState['cards']['player']);
	gameState['total']['dealer'] = calculateTotal(gameState['cards']['dealer']);
}

calculateTotal = function(cards) {
	total = 0;
	aces = 0;

	for (var i = 0; i < cards.length; i++) {
		card = cards[i];

		if (card.value.length == 1) {
			total += card.value[0];
		} else {
			aces += 1;		
		}
	}

	for (var i = 0; i < aces; i++) {
		if (aces == 1 && total <= 10) {
			total += 11;
		} else {
			total += 1;
		}
	}

	return total;
}

$(document).ready(function() {
	$("#new").click(function() {
		startGame();
	});
});
