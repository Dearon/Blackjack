var gui = {
	drawNew: function() {
		$('.buttons').html('<a href="#" id="hit" class="button">Hit</a> <a href="#" id="stay" class="button">Stay</a>');
		$('.container').append('<div class="eight columns center"><h4>Your cards</h4><div id="playerCards"></div></div>');
		$('.container').append('<div class="eight columns center"><h4>Dealers cards</h4><div id="dealerCards"></div></div>');
	},

	drawCard: function(card, person) {
		if (person == 'player') {
			$("#playerCards").append(card.name + "<br />");
		}

		if (person == 'dealer') {
			$("#dealerCards").append(card.name + "<br />");
		}
	}
}
