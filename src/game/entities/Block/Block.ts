import Base from "@/game/entities/Base/Base";

export default class Block extends Base { 
    private _active = true;

    constructor(x: number, y: number) {
        super(x, y, 60, 20);
    }

    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }
}