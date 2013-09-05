var gui = {
	startGame: function() {
		$('.buttons').html('<a href="#" id="deal" class="button">Deal</a>');
		$('.container').append('<div class="eight columns center" id="player"><h4></h4> <div class="cards"></div></div>');
		$('.container').append('<div class="eight columns center" id="dealer"><h4></h4> <div class="cards"></div></div>');
	},

	startRound: function() {
		$('.buttons').html('<a href="#" id="hit" class="button">Hit</a> <a href="#" id="stay" class="button">Stay</a>');
		$('#player h4').html('Your cards');
		$('#dealer h4').html('Dealers cards');
	},

	updateRound: function() {
		$('.cards').empty();

		for (var i = 0; i < gameState.cards.player.length; i++) {
			card = gameState.cards.player[i];
			$("#player .cards").append(card.name + "<br />");
		}

		for (var i = 0; i < gameState.cards.dealer.length; i++) {
			card = gameState.cards.dealer[i];
			$("#dealer .cards").append(card.name + "<br />");
		}

		$("#status").html('You have ' + gameState.total.player + ' points');
	},

	endRound: function(message) {
		$("#status").html(message);
		$('.buttons').html('<a href="#" id="deal" class="button">Deal</a>');
	},
}
