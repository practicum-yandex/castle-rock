export interface ISpritesPosition {
	x: number;
	y: number;
}

export interface ICardCoorinates {
	startX: number;
	endX: number;
	startY: number;
	endY: number;
}

export default class Card {
	private _hover = false;
	private _coordinates: ICardCoorinates = {} as ICardCoorinates;

	constructor(
		private _spritesX: number,
		private _spritesY: number,
		private _sWidth: number,
		private _sHeight: number,
		private _dWidth: number,
		private _dHeight: number,
		private _score: number,
		private _suit: string,
		private _level: string
	) {}

	get spritesX(): number {
		return this._spritesX;
	}

	get spritesY(): number {
		return this._spritesY;
	}

	get sWidth(): number {
		return this._sWidth;
	}

	get sHeight(): number {
		return this._sHeight;
	}

	get dWidth(): number {
		return this._dWidth;
	}

	get dHeight(): number {
		return this._dHeight;
	}

	get score(): number {
		return this._score;
	}

	get suit(): string {
		return this._suit;
	}

	get level(): string {
		return this._level;
	}

	get coordinates(): ICardCoorinates {
		return this._coordinates;
	}

	set coordinates(coordinates: ICardCoorinates) {
		this._coordinates = coordinates;
	}

	get hover(): boolean {
		return this._hover;
	}

	set hover(value: boolean) {
		this._hover = value;
	}
}
