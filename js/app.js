// game based in rounds. players gets three cards computer gets three cards. pit cards against each other. outcome. new rounds. game stops when there arent enough cards for another round ie. cards < 6 === game over


// create game object

const player = {
	roundsWon: 0,
	points: 0,
	currentHand: [],	
	playedCards: [],

}
const game = {
	cards: [
	 {name: "Bulbasaur", damage: 60},
	 {name: "Caterpie", damage: 40},
	 {name: "Charmander", damage: 60},
	 {name: "Clefairy", damage: 50},
	 {name: "Jigglypuff", damage: 60},
	 {name: "Mankey", damage: 30},
	 {name: "Meowth", damage: 60},
	 {name: "Nidoran - female", damage: 60},
	 {name: "Nidoran - male", damage: 50},
	 {name: "Oddish", damage: 40},
	 {name: "Pidgey", damage: 50},
	 {name: "Pikachu", damage: 50},
	 {name: "Poliwag", damage: 50},
	 {name: "Psyduck", damage: 60},
	 {name: "Rattata", damage: 30}, 
	 {name: "Squirtle", damage: 60}, 
	 {name: "Vulpix", damage: 50}, 
	 {name: "Weedle", damage: 40}
	 ],
	round: 1,
	computerHand: [],
	computerRoundsWon: 0,
	computerPoints: 0,
	playedCards: [],
	deal() {
		let randomIndex = Math.floor(Math.random() * this.cards.length);
		let dealCard = this.cards.splice(randomIndex, 1)[0];
		return dealCard;

	},
	dealCards() {
		for (let i = 0; i < 3; i++) {
			player.currentHand.push(this.deal());
			this.computerHand.push(this.deal());
		}
	},
	playerChoice() {
		let playerChoice = prompt(`Your hand is ${JSON.stringify(player.currentHand)}. Pick a pokemon to play.`);
		for (let i = 0; i < player.currentHand.length; i++) {
			if (playerChoice === player.currentHand[i].name) {
				let playerCard = playerChoice;
			}
		}
	},
	battle() {
		this.playerChoice();
		let playerCard = player.currentHand.splice(0, 1)[0];
		let computerCard = this.computerHand.splice(0, 1)[0];
		alert(`You played ${JSON.stringify(playerCard)}`);
		alert(`computer played ${JSON.stringify(computerCard)}`);
		if (playerCard.damage > computerCard.damage) {
			alert("You win");
			player.points++;
			document.write(`Player has ${player.points} points.`)
		} else if (computerCard.damage > playerCard.damage) {
			alert("computer wins");
			this.computerPoints++;
			document.write(`The computer has ${this.computerPoints} points.`);
		}
		this.playedCards.push(playerCard, computerCard);
	},
	playRound() {
		this.dealCards();
		for (let i = 0; i < 3; i++) {
			this.battle();
		if (player.points > this.computerPoints) {
			player.roundsWon++;
			alert(`The player won this round. ${player.roundsWon} rounds won.`);
		} else if (this.computerPoints > player.points) {
			this.computerRoundsWon++;
			alert(`The computer has won ${this.computerRoundsWon} rounds.`)
			}
		}
		player.points = 0;
		this.computerPoints = 0;
		this.round++;

	},
	playGame() {
		while (this.cards.length > 5) {
		this.playRound();
		}
		if(player.roundsWon > this.computerRoundsWon){
			alert("Game Over You Won!");
		} else if (this.computerRoundsWon > player.roundsWon) {
			alert("Game Over Computer Wins.");
		}
		
	},
};

game.playGame();

































































