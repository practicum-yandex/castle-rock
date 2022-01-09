import Base from "@/game/entities/Base/Base";
import Block from "@/game/entities/Block/Block";
import Platform from "@/game/entities/Platform/Platform";
import Game from "../Game/Game";

export default class Ball extends Base {
    private _dx = 0;
    private _dy = 0;
    private _velocity = 3;
    private _frame = 0;

    constructor(private _game: Game) {
        super(_game.width / 2 - 10, _game.height / 1.3 - 14, 20, 20);
    }

    get frame(): number {
        return this._frame;
    }

    random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    start(): void {
        this._dx = this.random(-this._velocity, this._velocity);
        this._dy = -this._velocity;

        this.animate();
    }

    animate(): void {
        setInterval(() => {
            this._frame++;

            if (this._frame > 3) {
                this._frame = 0;
            }
        }, 50);
    }

    move(): void {
        if (this._dx) {
            this._x += this._dx;
        }

        if (this._dy) {
            this._y += this._dy;
        }
    }

    collide(element: Base) {
        const x = this._x + this._dx;
        const y = this._y + this._dy;

        return (
            x + this._width > element.x && 
            x < element.x + element.width &&
            y + this._height > element.y &&
            y < element.y + element.height
        );
    }

    collideBounds(cb: (message: string) => void) {
        const x = this._x + this._dx
        const y = this._y + this._dy

        if (x + this.width > this._game.width || x < 0) {
            this._dx = -this._dx;
        }

        if (y < 0) {
            this._dy = -this._dy;
        }

        if (y + this.height > this._game.height) {
            cb('Вы проиграли!');
        }
    }

    bumpBlock(block: Block) {
        this._dy = -this._dy
        block.active = false
    }

    bumpPlatform(platform: Platform) {
        if (this._dy > 0) {
            const touchX = this.x + this.width / 2
            const touchOffset = platform.getTouchOffset(touchX)

            this._dy = -this._velocity
            this._dx = this._velocity * touchOffset
        }
    }
}