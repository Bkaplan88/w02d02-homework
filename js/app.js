// game based in rounds. players gets three cards computer gets three cards. pit cards against each other. outcome. new rounds. game stops when there arent enough cards for another round ie. cards < 6 === game over


// create game object

const player = {
	roundsWon: 0,
	points: 0,
	currentHand: [],	
	playedCards: [],

}
const game = {
	availableCards: [
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
	playerHand: [],
	computerHand: [],
	playerRoundsWon: 0,
	computerRoundsWon: 0,

	deal() {
		let randomIndex = Math.floor(Math.random() * this.availableCards.length);
		let dealCard = game.availableCards.splice(randomIndex, 1);
		return dealCard;
	},
	createComputerHand() {
		for (let i = 0; i < 3; i++) {
			this.computerHand.push(this.deal());
			
		}
		return this.computerHand;
	},
	createPlayerHand() {
		for (let i = 0; i < 3; i++) {
			this.playerHand.push(this.deal());
			
		}
		return this.playerHand;
	},
	roundWin() {
		let playerPoints = 0;
		let computerPoints = 0;
		for (let i = 0; i < this.playerHand.length; i++) {
			console.log(`player played ${this.playerHand[i].name} card`);
			console.log(`computer played ${this.computerHand[i].name} card`);
			if (this.playerHand[i].damage > this.computerHand[i].damage) {
				playerPoints++;
			} else if (this.computerHand[i].damage > this.playerHand[i].damage) {
				computerPoints++;
			}
  		}
  		if (playerPoints > computerPoints) {
  			this.playerRoundsWon++;
  			console.log("Player won round");

  		} else if (computerPoints > playerPoints) {
  			this.computerRoundsWon++;
  			console.log("Computer won round");

  		}
 }
};




console.log(game.deal());
console.log(game.createComputerHand());
console.log(game.createPlayerHand());
game.roundWin();

