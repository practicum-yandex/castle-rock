import { SoundKeys, Sounds } from "@/models/Sounds";
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
	private _table: HTMLImageElement | undefined;
	private _gameStatus: GameStatus = "start";
	private _sounds: { [key: string]: HTMLAudioElement } = {};

	constructor(
		private _width: number,
		private _height: number,
		private _canvas: HTMLCanvasElement,
		private _ctx: CanvasRenderingContext2D
	) {}

	get gameStatus() {
		return this._gameStatus;
	}

	public playSound(key: SoundKeys): void {
		this._sounds[key].play();
	}

	public start(): void {
		this.init();
		this.create();

		this.preload(() => {
			this.run();
		});
	}

	public startGame() {
		this._gameStatus = "game";
		this.takeCard(false);
		this.takeCard(false);
		this.takeCard();
		this.takeCard();
		this.checkOpponentStartScore();
	}

	public takeCard(isUser = true): void {
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

	public startOpponentGame() {
		while (this.getScoreSum(this._opponentHand) < 17) {
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

	private init(): void {
		this.setEvents();
		this.setTextFont();
	}

	private setTextFont(): void {
		this._ctx.font = "24px Arial";
		this._ctx.fillStyle = "#fff";
	}

	private setEvents(): void {
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

	private getScoreSum(hand: Hand) {
		return hand
			.map((card) => card.score)
			.reduce((acc, score) => score + acc, 0);
	}

	private checkUserScore() {
		if (this.getScoreSum(this._hand) === 21) {
			this.userWin();
		} else if (this.getScoreSum(this._hand) > 21) {
			this.userLose();
		}
	}

	private checkOpponentStartScore() {
		if (
			this.getScoreSum(this._opponentHand) === 21 &&
			this.getScoreSum(this._hand) === 21
		) {
			this._gameStatus = "nobody";
		} else if (this.getScoreSum(this._opponentHand) === 21) {
			this.userLose();
		} else if (this.getScoreSum(this._opponentHand) > 21) {
			this.userWin();
		}
	}

	private userLose() {
		this._gameStatus = "lose";
	}

	private userWin() {
		this._gameStatus = "win";
	}

	private preload(cb: () => void) {
		this.preloadSprites(cb);
		this.preloadAudio();
		this.preloadTable();
	}

    private preloadAudio() {
		Sounds.forEach((sound) => {
			this._sounds[sound.key] = new Audio(sound.sound);
			this._sounds[sound.key].volume = 0.5;
		})
    }

	private preloadSprites(onResourceLoad: () => void): void {
		this._sprites = new Image();
		this._sprites.src = `./images/sprites.jpg`;
		this._sprites.onload = onResourceLoad;
	}

	private preloadTable(): void {
		this._table = new Image();
		this._table.src = `./images/table-background.jpg`;
	}

	public restart(): void {
		this._hand = [];
		this._opponentHand = [];
		this._deck = [];

		this.create();
		this.render();
		this.startGame();
	}

	private create(): void {
		this.createCards();
	}

	private createCards(): void {
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

	private render(): void {
		this.clearCanvas();
		this.renderTable();
		this.renderHand();
		this.renderScores();
	}

	private roundedImage(
		x: number,
		y: number,
		width: number,
		height: number,
		radius: number
	) {
		this._ctx.beginPath();
		this._ctx.moveTo(x + radius, y);
		this._ctx.lineTo(x + width - radius, y);
		this._ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		this._ctx.lineTo(x + width, y + height - radius);
		this._ctx.quadraticCurveTo(
			x + width,
			y + height,
			x + width - radius,
			y + height
		);
		this._ctx.lineTo(x + radius, y + height);
		this._ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		this._ctx.lineTo(x, y + radius);
		this._ctx.quadraticCurveTo(x, y, x + radius, y);
		this._ctx.closePath();
	}

	private renderHand() {
		const hand = this._hand.concat(this._opponentHand);

		hand.forEach((card) => {
			if (this._sprites) {
				this._ctx.save();

				this.roundedImage(
					card.coordinates.startX,
					card.coordinates.startY,
					card.dWidth,
					card.dHeight,
					10
				);

				this._ctx.clip();

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

				this._ctx.restore();
			}
		});
	}

	private renderTable() {
		if (this._table) {
			this._ctx.drawImage(this._table, 0, 0, this._width, this._height);
		}
	}

	private renderScores() {
		if (this._height) {
			this._ctx.fillText(
				this.getScoreSum(this._opponentHand).toString(),
				this._width / 2,
				this._height / 5 + 140 + 40
			);

			this._ctx.fillText(
				this.getScoreSum(this._hand).toString(),
				this._width / 2,
				this._height / 1.5 - 20
			);
		}
	}

	private clearCanvas(): void {
		this._ctx.clearRect(0, 0, this._width, this._height);
	}

	private run(): void {
		if (this._launched) {
			window.requestAnimationFrame(() => {
				this.render();
				this.run();
			});
		}
	}
}
