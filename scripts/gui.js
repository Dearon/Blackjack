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

		$('.cards').empty();
		$("#status").empty();
	},

	updateRound: function(card, side) {
		for (var i = 0; i < game.cards.player.length; i++) {
			var card = game.cards.player[i];

			if (! $('#card' + card.id).length) {
				$("#player .cards").append('<span id="card' + card.id + '" class="card"></span>');

				$('#card' + card.id).html('<img src="img/' + card.image + '" />').hide().fadeIn(600);
			}
		}

		for (var i = 0; i < game.cards.dealer.length; i++) {
			var card = game.cards.dealer[i];

			if (! $('#card' + card.id).length) {
				$("#dealer .cards").append('<span id="card' + card.id + '" class="card"></span>');

				if (game.action == 'hit' && i == 1) {
					$('#card' + card.id).html('<img src="img/' + deckBack + '" />').hide().fadeIn(600);
				} else {
					$('#card' + card.id).html('<img src="img/' + card.image + '" />').hide().fadeIn(600);
				}
			} else if (game.action == 'stay' && i == 1) {
				$('#card' + card.id).hide();
				$('#card' + card.id).html('<img src="img/' + card.image + '" />').fadeIn(600);
			}
		}

		$('#player h4').html('Your cards (' + game.total.player + ' points)');

		if (game.action == 'hit') {
			$('#dealer h4').html('Dealers cards');
		} else {
			$('#dealer h4').html('Dealers cards (' + game.total.dealer + ' points)');
		}
	},

	endRound: function(message) {
		$("#status").html(message);
		$('.buttons').html('<a href="#" id="deal" class="button">Deal</a>');
	},
}
