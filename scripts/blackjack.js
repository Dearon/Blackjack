randomCard = function() {
	var key = Math.floor(Math.random() * deck.length);
	return deck[key];
}

var state = {};
state['player'] = {};
state['player']['cards'] = [];

startGame = function() {
	drawGUI();

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

drawGUI = function() {
	$('.buttons').html('<a href="#" id="hit" class="button">Hit</a> <a href="#" id="stay" class="button">Stay</a>');

	$('.container').append('<div class="eight columns center"><h4>Your cards</h4><div id="playerCards"></div></div>');
	$('.container').append('<div class="eight columns center"><h4>Dealers cards</h4><div id="dealerCards"></div></div>');
}

hitCard = function(who) {
	card = randomCard();
	state['player']['cards'].push(card);

	if (who == 'player') {
		$("#playerCards").append(card['name'] + "<br />");
	} else if (who == 'dealer') {
		$("#dealerCards").append(card['name'] + "<br />");
	}
}

$(document).ready(function() {
	$("#new").click(function() {
		startGame();
	});
});
