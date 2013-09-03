randomCard = function() {
	var key = Math.floor(Math.random() * deck.length);
	return deck[key];
}

var state = {};
state['player'] = {};
state['player']['cards'] = [];

startGame = function() {
	gui.drawNew();

	$("#hit").click(function() {
		hitCard('player');
	});
	$("#stay").click(function() {
		alert('Stay pressed');
	});

	hitCard('player');
	hitCard('player');
	hitCard('dealer');

}

hitCard = function(who) {
	card = randomCard();
	state['player']['cards'].push(card);
	gui.drawCard(card, who);
}

$(document).ready(function() {
	$("#new").click(function() {
		startGame();
	});
});
