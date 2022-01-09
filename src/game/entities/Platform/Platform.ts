import { KEYS } from "@/game/models/Keys.enum";
import Ball from "@/game/entities/Ball/Ball";
import Base from "@/game/entities/Base/Base";
import Game from "../Game/Game";

export default class Platform extends Base {
    private _dx = 0;
    private _velocity = 6;

    constructor(
        private _game: Game,
        private _ball: Ball | null
        
    ) {
        super(_game.width / 2 - 50, _game.height / 1.3, 100, 14);
    }

    getTouchOffset(x: number) {
        const diff = (this._x + this._width) - x;
        const offset = this._width - diff;
        const result = 2 * offset / this._width;

        return result - 1;
    }

    start(direction: KEYS) {
        if (direction === KEYS.Left) {
            this._dx = -this._velocity;
        }

        if (direction === KEYS.Right) {
            this._dx = this._velocity;
        }
    }

    stop() {
        this._dx = 0;
    }

    move() {
        if (this._dx) {
            if (this._dx < 0 && this.x > 0) {
                this.x += this._dx;
                this.moveBall();
            }

            if (this._dx > 0 && this.x + this.width < this._game.width) {
                this.x += this._dx;
                this.moveBall();
            }
        }
    }

    moveBall() {
        if (this._ball) {
            this._ball.x += this._dx;
        }
    }

    fire() {
        if (this._ball) {
            this._ball.start();
            this._ball = null;
        }
    }
}