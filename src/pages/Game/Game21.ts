import Card from "./Card";

enum CardSuit {
    Heart = 1,
    Spades = 2,
    Diamonds = 3,
    Clubs = 4
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
    King = 13
}

export default class Game21 {
    private _launched = true;
    private _deck: Card[] = [];
    private _hand: Card[] = [];
    private _sprites: HTMLImageElement | undefined;

    constructor(
        private _width: number, 
        private _height: number,
        private _canvas: HTMLCanvasElement,
        private _ctx: CanvasRenderingContext2D
    ) {}

    init(): void {
        this.setEvenets()
        this.setTextFont()
    }

    setTextFont(): void {
        this._ctx.font = '12px Arial';
        this._ctx.fillStyle = '#000';
    }

    setEvenets(): void {
        this._canvas.addEventListener('mousemove', (event: MouseEvent) => {
            const cursorX = event.offsetX;
            const cursorY = event.offsetY;

            this._canvas.style.cursor = 'auto';

            this._hand.forEach((card, index) => {
                const cardCoordinates = card.coordinates;

                if (
                    cardCoordinates.startX < cursorX &&
                    cardCoordinates.startY < cursorY &&
                    cardCoordinates.endX > cursorX &&
                    cardCoordinates.endY > cursorY
                ) {
                    this._canvas.style.cursor = 'pointer';
                }
            })
        })
    }

    takeCards(count: number): void {
        this._hand = this._deck
            .splice(0 , count)
            .map((card, index) => {
                const cardSpace = 20;
                const deckWidth = 13 * cardSpace;
                const cardDisplayWidth = card.dWidth;
                const cardDisplayHeight = card.dHeight;
                const cardDifference = index * cardSpace;
                const deckPositionX = this._width / 2 - deckWidth / 2;
                const deckPositionY = this._height / 1.5;

                card.coordinates = {
                    startX: deckPositionX + cardDifference,
                    startY: deckPositionY,
                    endX: deckPositionX + cardDifference + cardDisplayWidth,
                    endY: deckPositionY + cardDisplayHeight
                }

                return card;
            })
    }

    preload(cb: () => void) {
        this.preloadSprites(cb);
    }

    preloadSprites(onResourceLoad: () => void): void {
        this._sprites = new Image();
        this._sprites.src = `./images/sprites.jpg`;
        this._sprites.onload = onResourceLoad;
    }

    update(): void {
        //this._ball.move()
        //this.collideBlocks()
    }

    create(): void {
        this.createCards()
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

            this._deck.push(new Card(
                width * col,
                height * row,
                width, height,
                cardDisplyWidth,
                cardDisplyHeight,
                CardSuit[row + 1],
                CardLevels[col + 1],
            ))
        }
    }

    render(): void {
        this.clearCanvas();
        this.renderHand();
    }

    renderHand() {
        this._hand.forEach((card) => {
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
        })
    }

    clearCanvas(): void {
        this._ctx.clearRect(0, 0, this._width, this._height);
    }

    run(): void {
        if (this._launched) {
            window.requestAnimationFrame(() => {
                this.update();
                this.render();
                this.run();
            })
        }
    }

    start(): void {
        this.init()
        this.preload(() => {
            this.create();
            this.takeCards(6); // remove
            this.run();
        })
    }
}