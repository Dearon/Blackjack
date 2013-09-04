var gameState = {
	deck: deck,
	cards: {
		player: [],
		dealer: [],
	},

	total: {
		player: 0,
		dealer: 0,
	},

	updateTotal: function() {
		var calculate = function(cards) {
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

			if (aces == 1 && total <= 10) {
				total += 11;
			} else if (aces > 1) {
				total += aces;
			}

			return total;
		}

		this.total.player = calculate(this.cards.player);
		this.total.dealer = calculate(this.cards.dealer);
	},

	drawCard: function(person) {
		var card = this.deck[Math.floor(Math.random() * this.deck.length)];

		if (person == 'player') {
			this.cards.player.push(card);
		} else if (person == 'dealer') {
			this.cards.dealer.push(card);
		}

		this.updateTotal();
	},

	newRound: function() {
		this.drawCard('player');
		this.drawCard('player');
		this.drawCard('dealer');
		this.drawCard('dealer');
	},
};

$(document).ready(function() {
	$("body").on("click", "#new", function() {
		gui.startGame();
	});

	$("body").on("click", "#deal", function() {
		gameState.newRound();

		gui.startRound();
		gui.updateRound();
	});

	$("body").on("click", "#hit", function() {
		gameState.drawCard('player');

		gui.startRound();
		gui.updateRound();
	});

	$("body").on("click", "#stay", function() {
		alert('Stay pressed');
	});
});
