type TSize = number;
type TCoordinate = number;

export default abstract class Base {
    protected _x: TCoordinate;
    protected _y: TCoordinate;
    protected _width: TSize;
    protected _height: TSize;

    constructor(x: TCoordinate, y: TCoordinate, w: TSize, h: TSize) {
        this._x = x;
        this._y = y;
        this._width = w;
        this._height = h;
    }

    public get x(): TCoordinate {
        return this._x;
    }

    public get y(): TCoordinate {
        return this._y;
    }

    public get width(): TSize {
        return this._width;
    }

    public get height(): TSize {
        return this._height;
    }

    public set x(value: TCoordinate) {
        this._x = value;
    }

    public set y(value: TCoordinate) {
        this._y = value;
    }

    public set width(value: TSize) {
        this._width = value;
    }

    public set height(value: TSize) {
        this._height = value;
    }
}