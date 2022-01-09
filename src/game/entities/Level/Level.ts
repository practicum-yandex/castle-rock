import Ball from "../Ball/Ball";
import Block from "../Block/Block";
import Game from "../Game/Game";
import Platform from "../Platform/Platform";
import { KEYS } from "@/game/models/Keys.enum";
import { ILevelConfig } from "@/game/models/LevelConfig.interface";
import { ILevelEntities } from "@/game/models/LevelEntities.interface";

export default class Level {
    private _score = 0;
    private _launched = true;
    private _rows: number;
    private _columns: number;
    private _ball: Ball;
    private _platform: Platform;
    private _blocks: Block[] = [];
    private _sprites: { [key: string]: HTMLImageElement } = {};

    constructor(
        private _game: Game,
        config: ILevelConfig,
        entities: ILevelEntities
    ) {
        this._ball = entities.ball;
        this._platform = entities.platform;
        this._rows = config.row;
        this._columns = config.columns;
    }

    init() {
        this.setEvenets()
        this.setTextFont()
    }

    setTextFont() {
        this._game.ctx.font = '12px Arial';
        this._game.ctx.fillStyle = '#000';
    }

    setEvenets() {
        window.addEventListener('keydown', (event) => {
            if (event.keyCode === KEYS.Left || event.keyCode === KEYS.Right) {
                this._platform.start(event.keyCode)
            }

            if (event.keyCode === KEYS.Space) {
                this._platform.fire()
            }
        })

        window.addEventListener('keyup', () => {
            this._platform.stop()
        })
    }

    preload(cb: () => void) {
        let progress = 0
        const imagesKeys = ['ball', 'block', 'platform', 'background'];
        const fullLoadValue = [...imagesKeys].length;

        const onResourceLoad = (): void => {
            if (++progress === fullLoadValue) {
                cb();
            }
        }

        this.preloadSprites(imagesKeys, onResourceLoad);
    }

    preloadSprites(keys: string[], onResourceLoad: () => void) {
        keys.forEach((key) => {
            this._sprites[key] = new Image();
            this._sprites[key].src = `./images/${key}.png`;
            this._sprites[key].onload = onResourceLoad;
        })
    }

    render() {
        this._game.ctx.clearRect(0, 0, this._game.width, this._game.height)
        this.renderBackground();
        this.renderPlatform();
        this.renderBall();
        this.renderBlocks();
        this.renderScore();
    }

    renderBackground() {
        this._game.ctx.drawImage(this._sprites.background, 0, 0, this._game.width, this._game.height);
    }

    renderPlatform() {
        this._game.ctx.drawImage(this._sprites.platform, this._platform.x, this._platform.y)
    }

    renderBlocks() {
        this._blocks.forEach((block) => {
            if (block.active) {
                this._game.ctx.drawImage(this._sprites.block, block.x, block.y)
            }
        })
    }

    renderBall() {
        this._game.ctx.drawImage(
            this._sprites.ball, 
            this._ball.frame * this._ball.width, 0, 
            this._ball.width, this._ball.height, 
            this._ball.x, this._ball.y, 
            this._ball.width, this._ball.height
        )
    }

    renderScore() {
        this._game.ctx.fillText(`Score: ${this._score}`, 15, 20);
    }

    addScore() {
        this._score += 1

        if (this._score === this._blocks.length) {
            this.end('Вы победили!')
        }
    }

    collideBlocks() {
        for (let block of this._blocks) {
            if (block.active && this._ball.collide(block)) {
                this._ball.bumpBlock(block);
                this.addScore();
            }
        }
    }

    collidePlatform() {
        if (this._ball.collide(this._platform)) {
            this._ball.bumpPlatform(this._platform)
        }
    }

    collideBounds() {
        this._ball.collideBounds(this.end.bind(this, 'Вы проиграли!'));
    }

    createBlocks() {
        for (let row = 0; row < this._rows; row++) {
            for (let col = 0; col < this._columns; col++) {
                this._blocks.push(new Block(
                    64 * col + 65,
                    24 * row + 35
                ))
            }
        }
    }

    update() {
        this._ball.move()
        this._platform.move()
        this.collideBounds()
        this.collideBlocks()
        this.collidePlatform()
    }

    run() {
        if (this._launched) {
            window.requestAnimationFrame(() => {
                this.update()
                this.render()
                this.run()
            })
        }
    }

    create() {
        this.createBlocks()
    }

    start() {
        this.init()
        this.preload(() => {

            this.create()
            this.run()
        })
    }

    end(message: string) {
        this._launched = false
        alert(message)
        location.reload()
    }
}