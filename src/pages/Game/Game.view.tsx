import React, { useEffect, useRef, useState } from "react";
import Button from "@/share/Button";
import { Canvas, GameContent } from "./Game.styles";
import Game21 from "./Game21";

const GAME_SETTINGS = {
	width: window.innerWidth,
	height: window.innerHeight
}

const createGame = (canvasEl: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
	const game21 = new Game21(
		GAME_SETTINGS.width, 
		GAME_SETTINGS.height, 
		canvasEl, ctx
	);

	game21.start();

	return game21;
}

const Game: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const contextRef = useRef<CanvasRenderingContext2D>();
	const gameRef = useRef<Game21>();
	const [isStart, setStartStatus] = useState(true);

	useEffect(() => {
		if (canvasRef.current) {
			const canvasEl: HTMLCanvasElement = canvasRef.current;
			canvasEl.width = GAME_SETTINGS.width;
			canvasEl.height = GAME_SETTINGS.height;
			contextRef.current = canvasEl.getContext('2d') as CanvasRenderingContext2D;

			gameRef.current = createGame(canvasEl, contextRef.current);

			// gameRef.current.takeCard();
		}
	}, []);



	const renderContent = () => {
		if (isStart && false) {
			return <Button onClick={() => setStartStatus(false)}>Start game</Button>	
		}

		return <Canvas ref={canvasRef} />;
	};

	return <GameContent>{renderContent()}</GameContent>;
};

export default Game;
