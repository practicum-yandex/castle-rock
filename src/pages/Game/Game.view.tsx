import React, { useEffect, useRef, useState } from "react";
import Button from "@/share/Button";
import { Canvas, GameContent } from "./Game.styles";
import Game21 from "./Game21";

const GAME_SETTINGS = {
	Width: window.innerWidth,
	Height: window.innerHeight
}

const runGame = (canvasEl: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
	const game21 = new Game21(
		GAME_SETTINGS.Width, 
		GAME_SETTINGS.Height, 
		canvasEl, ctx
	);

	game21.start();
}

const Game: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const contextRef = useRef<CanvasRenderingContext2D>();
	const [isStart, setStartStatus] = useState(true);

	useEffect(() => {
		if (canvasRef.current) {
			const canvasEl: HTMLCanvasElement = canvasRef.current;
			canvasEl.width = GAME_SETTINGS.Width;
			canvasEl.height = GAME_SETTINGS.Height;
			contextRef.current = canvasEl.getContext('2d')  as CanvasRenderingContext2D;

			runGame(canvasEl, contextRef.current);
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
