var gui = {
	startGame: function() {
		$('.buttons').html('<a href="#" id="deal" class="button">Deal</a>');
		$('.container').append('<div class="eight columns center" id="player"></div>');
		$('.container').append('<div class="eight columns center" id="dealer"></div>');
	},

	startRound: function() {
		$('.buttons').html('<a href="#" id="hit" class="button">Hit</a> <a href="#" id="stay" class="button">Stay</a>');
		$('#player').html('<h4>Your cards</h4> <div class="cards"></div>');
		$('#dealer').html('<h4>Dealers cards</h4> <div class="cards"></div>');
	},

	updateRound: function() {
		$("#player .cards").empty();
		$("#dealer .cards").empty();

		for (var i = 0; i < gameState.cards.player.length; i++) {
			card = gameState.cards.player[i];
			$("#player .cards").append(card.name + "<br />");
		}

		for (var i = 0; i < gameState.cards.dealer.length; i++) {
			card = gameState.cards.dealer[i];
			$("#dealer .cards").append(card.name + "<br />");
		}

		if (gameState.total.player > 21) {
			$("#status").html('You have gone bust');
		} else {
			$("#status").html('You have ' + gameState.total.player + ' points');
		}
	}
}
