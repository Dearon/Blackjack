var gui = {
	dealButtons: function() {
		$('.buttons').html('<a href="#" id="deal" class="button">Deal</a>');
	},

	roundButtons: function() {
		$('.buttons').html('<a href="#" id="hit" class="button">Hit</a> <a href="#" id="stay" class="button">Stay</a>');
	},

	cardArea: function() {
		$('.container').append('<div class="eight columns center"><h4>Your cards</h4><div id="playerCards"></div></div>');
		$('.container').append('<div class="eight columns center"><h4>Dealers cards</h4><div id="dealerCards"></div></div>');
	},

	cards: function() {
		$("#playerCards").empty();
		$("#dealerCards").empty();

		for (var i = 0; i < gameState.cards.player.length; i++) {
			card = gameState.cards.player[i];
			$("#playerCards").append(card.name + "<br />");
		}

		for (var i = 0; i < gameState.cards.dealer.length; i++) {
			card = gameState.cards.dealer[i];
			$("#dealerCards").append(card.name + "<br />");
		}
	},

	status: function() {
		if (gameState.total.player > 21) {
			$("#status").html('You have gone bust');
		} else {
			$("#status").html('You have ' + gameState.total.player + ' points');
		}
	}
}
