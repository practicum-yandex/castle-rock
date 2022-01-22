import Card from "./Card";

export type GameStatus = "start" | "game" | "win" | "lose" | "nobody";

type Hand = Card[];

type CartScores = {
	// todo TS
	[key in any]: number;
};

enum CardSuit {
	Heart = 1,
	Spades = 2,
	Diamonds = 3,
	Clubs = 4,
}

enum CardLevels {
	Ace = 1,
	Two = 2,
	Three = 3,
	Four = 4,
	Five = 5,
	Six = 6,
	Seven = 7,
	Eight = 8,
	Nine = 9,
	Ten = 10,
	Jack = 11,
	Queen = 12,
	King = 13,
}

const cardScores: CartScores = {
	[CardLevels[1]]: 11,
	[CardLevels[2]]: 2,
	[CardLevels[3]]: 3,
	[CardLevels[4]]: 4,
	[CardLevels[5]]: 5,
	[CardLevels[6]]: 6,
	[CardLevels[7]]: 7,
	[CardLevels[8]]: 8,
	[CardLevels[9]]: 9,
	[CardLevels[10]]: 10,
	[CardLevels[11]]: 2,
	[CardLevels[12]]: 3,
	[CardLevels[13]]: 4,
};

export default class Game21 {
	private _launched = true;
	private _deck: Card[] = [];
	private _hand: Hand = [];
	private _opponentHand: Hand = [];
	private _sprites: HTMLImageElement | undefined;
	private _gameStatus: GameStatus = "start";

	constructor(
		private _width: number,
		private _height: number,
		private _canvas: HTMLCanvasElement,
		private _ctx: CanvasRenderingContext2D
	) {}

	init(): void {
		this.setEvents();
		this.setTextFont();
	}

	setTextFont(): void {
		this._ctx.font = "12px Arial";
		this._ctx.fillStyle = "#000";
	}

	setEvents(): void {
		this._canvas.addEventListener("mousemove", (event: MouseEvent) => {
			const cursorX = event.offsetX;
			const cursorY = event.offsetY;

			this._canvas.style.cursor = "auto";

			this._hand.forEach((card) => {
				const cardCoordinates = card.coordinates;

				if (
					cardCoordinates.startX < cursorX &&
					cardCoordinates.startY < cursorY &&
					cardCoordinates.endX > cursorX &&
					cardCoordinates.endY > cursorY
				) {
					this._canvas.style.cursor = "pointer";
				}
			});
		});
	}

	takeCard(isUser = true): void {
		const randomNumber = Math.floor(Math.random() * this._deck.length);
		const hand = isUser ? this._hand : this._opponentHand;

		const randomCard = this._deck.splice(randomNumber, 1).map((card) => {
			const cardSpace = 20;
			const deckWidth = 13 * cardSpace;
			const cardDisplayWidth = card.dWidth;
			const cardDisplayHeight = card.dHeight;
			const cardDifference = (hand.length - 1) * cardSpace;
			const deckPositionX = this._width / 2 - deckWidth / 2;
			const deckPositionY = isUser ? this._height / 1.5 : this._height / 5;

			card.coordinates = {
				startX: deckPositionX + cardDifference,
				startY: deckPositionY,
				endX: deckPositionX + cardDifference + cardDisplayWidth,
				endY: deckPositionY + cardDisplayHeight,
			};

			return card;
		});

		hand.push(...randomCard);

		if (isUser) {
			this.checkUserScore();
		}
	}

	getScoreSum(hand: Hand) {
		return hand
			.map((card) => card.score)
			.reduce((acc, score) => score + acc, 0);
	}

	checkUserScore() {
		if (this.getScoreSum(this._hand) === 21) {
			this.userWin();
		} else if (this.getScoreSum(this._hand) > 21) {
			this.userLose();
		}
	}

	userLose() {
		this._gameStatus = "lose";
	}

	userWin() {
		this._gameStatus = "win";
	}

	get gameStatus() {
		return this._gameStatus;
	}

	startOpponentGame() {
		while (this.getScoreSum(this._opponentHand) < 15) {
			this.takeCard(false);
		}

		if (
			this.getScoreSum(this._opponentHand) > 21 ||
			this.getScoreSum(this._opponentHand) < this.getScoreSum(this._hand)
		) {
			this.userWin();
		} else if (
			this.getScoreSum(this._opponentHand) > this.getScoreSum(this._hand)
		) {
			this.userLose();
		} else {
			this._gameStatus = "nobody";
		}
	}

	preload(cb: () => void) {
		this.preloadSprites(cb);
	}

	preloadSprites(onResourceLoad: () => void): void {
		this._sprites = new Image();
		this._sprites.src = `./images/sprites.jpg`;
		this._sprites.onload = onResourceLoad;
	}

	restart(): void {
		this._hand = [];
		this._opponentHand = [];
		this._deck = [];

		this.create();
		this.render();
		this._gameStatus = "game";
		this.takeCard();
	}

	create(): void {
		this.createCards();
	}

	createCards(): void {
		let col = 0;
		let row = 0;
		const width = 225;
		const height = 315;
		const cardDisplyWidth = 100;
		const cardDisplyHeight = 140;

		for (let count = 0; count < 52; count++) {
			if (count % 13 === 0 && count !== 0) {
				col = 0;
				row += 1;
			} else if (count % 13 !== 0) {
				col += 1;
			}

			const cardLevel = CardLevels[col + 1];

			this._deck.push(
				new Card(
					width * col,
					height * row,
					width,
					height,
					cardDisplyWidth,
					cardDisplyHeight,
					cardScores[cardLevel],
					CardSuit[row + 1],
					cardLevel
				)
			);
		}
	}

	render(): void {
		this.clearCanvas();
		this.renderHand();
	}

	renderHand() {
		const hand = this._hand.concat(this._opponentHand);

		hand.forEach((card) => {
			if (this._sprites) {
				this._ctx.drawImage(
					this._sprites,
					card.spritesX,
					card.spritesY,
					card.sWidth,
					card.sHeight,
					card.coordinates.startX,
					card.coordinates.startY,
					card.dWidth,
					card.dHeight
				);
			}
		});
	}

	clearCanvas(): void {
		this._ctx.clearRect(0, 0, this._width, this._height);
	}

	run(): void {
		if (this._launched) {
			window.requestAnimationFrame(() => {
				this.render();
				this.run();
			});
		}
	}

	start(): void {
		this.init();
		this.create();

		this.preload(() => {
			this.run();
		});
	}

	startGame() {
		this.takeCard();
		this._gameStatus = "game";
	}
}
