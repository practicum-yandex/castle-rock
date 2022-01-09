import React, { useEffect, useRef, useState } from "react";
import Button from "@/share/Button";
import { Canvas, GameContent } from "./Game.styles";
import GameEntity from "@/game/entities/Game/Game" 
import Ball from "@/game/entities/Ball/Ball";
import Platform from "@/game/entities/Platform/Platform";
import Level from "@/game/entities/Level/Level";

const GAME_SETTINGS = {
	Width: 640,
	Height: 360
}

const runGame = (ctx: CanvasRenderingContext2D) => {
	const game = new GameEntity(GAME_SETTINGS.Width, GAME_SETTINGS.Height, ctx);
	const ball = new Ball(game);
	const platform = new Platform(game, ball);
	const level = new Level(
		game,
		{ row: 4, columns: 8 },
		{ ball, platform }
	)

	level.start();
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

			runGame(contextRef.current);
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
