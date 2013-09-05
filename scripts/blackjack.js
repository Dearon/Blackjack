var game = {
	deck: deck,
	cards: {
		player: [],
		dealer: [],
	},

	total: {
		player: 0,
		dealer: 0,
	},

	action: 'hit',

	ready: true,

	toggleReady: function() {
		this.ready = false;

		window.setTimeout(function() {
			game.ready = true;
		}, 600);
	},

	calculateTotal: function() {
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

	randomizeDeck: function() {
		var randomKey;
		var value;

		for (var i = this.deck.length - 1; i >= 0; i--) {
			randomKey = Math.floor(Math.random() * i);
			value = this.deck[i];
			this.deck[i] = this.deck[randomKey];
			this.deck[randomKey] = value;
		}
	},

	startGame: function() {
		this.randomizeDeck();

		gui.startGame();
	},

	startRound: function() {
		this.action = 'hit';

		this.cards.player.push(this.deck.shift());
		this.cards.player.push(this.deck.shift());
		this.cards.dealer.push(this.deck.shift());
		this.cards.dealer.push(this.deck.shift());

		this.calculateTotal();

		gui.startRound();
		gui.updateRound();
	},

	updateRound: function(action) {
		this.action = action;

		if (action == 'hit') {
			this.cards.player.push(this.deck.shift());

			this.calculateTotal();

			if (this.total.player > 21) {
				this.action = 'stay';
			}

			gui.updateRound();

			if (this.total.player > 21) {
				this.endRound('The dealer has won, you have gone bust');
			}

		} else if (action == 'stay') {
			while (this.total.dealer < 17) {
				this.cards.dealer.push(this.deck.shift());
				this.calculateTotal();
				gui.updateRound();
			}

			gui.updateRound();

			if (this.total.dealer > 21) {
				this.endRound('You have won, the dealer has gone bust');
			} else if (this.total.dealer > this.total.player) {
				this.endRound('The dealer has won');
			} else if (this.total.dealer == this.total.player) {
				this.endRound('It\'s a tie');
			} else {
				this.endRound('You have won');
			}
		}
	},

	endRound: function(message) {
		while (this.cards.player.length > 0) {
			this.deck.push(this.cards.player.shift());
		}

		while (this.cards.dealer.length > 0) {
			this.deck.push(this.cards.dealer.shift());
		}

		gui.endRound(message);
		this.calculateTotal();
	},
};

$(document).ready(function() {
	$("body").on("click", "#new", function() {
		game.startGame();
	});

	$("body").on("click", "#deal", function() {
		if (game.ready) {
			game.toggleReady();
			game.startRound();
		}
	});

	$("body").on("click", "#hit", function() {
		if (game.ready) {
			game.toggleReady();
			game.updateRound('hit');
		}
	});

	$("body").on("click", "#stay", function() {
		if (game.ready) {
			game.toggleReady();
			game.updateRound('stay');
		}
	});
});
