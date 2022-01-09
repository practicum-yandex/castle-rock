export default class Game {
    constructor(
        private _width: number, 
        private _height: number,
        private _ctx: CanvasRenderingContext2D
    ) {}

    get ctx(): CanvasRenderingContext2D {
        return this._ctx;
    }
    get width(): number {
        return this._width;
    }
    get height(): number {
        return this._height;
    }
}