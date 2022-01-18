import React, { useState, useEffect, useRef } from "react";

import Button from "@/share/Button";
import {
	Canvas,
	CanvasWrap,
	GameContent,
	GameField,
	Controls,
} from "./Game.styles";
import Game21, { GameStatus } from "./Game21";
import Title from "@/share/Title";

type CanvasSizeParams = {
	width: number;
	height: number;
};

const createGame = (
	canvasEl: HTMLCanvasElement,
	ctx: CanvasRenderingContext2D,
	canvasSizeParams: CanvasSizeParams
) => {
	const game21 = new Game21(
		canvasSizeParams.width,
		canvasSizeParams.height,
		canvasEl,
		ctx
	);

	game21.start();

	return game21;
};

const Game: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvasWrapRef = useRef<HTMLDivElement>(null);
	const contextRef = useRef<CanvasRenderingContext2D>();
	const gameRef = useRef<Game21>();

	const [gameStatus, setGameStatus] = useState<GameStatus>();
	const [canvasSizeParams, setCanvasSizeParams] = useState({
		width: 0,
		height: 0,
	});

	const refreshGameStatus = () => {
		setGameStatus(gameRef.current?.gameStatus);
	};

	useEffect(() => {
		if (canvasRef.current && canvasWrapRef.current) {
			const width = canvasWrapRef.current.clientWidth;
			const height = canvasWrapRef.current.clientHeight;

			setCanvasSizeParams({
				width: width > 600 ? width : 600,
				height: height > 600 ? height : 600,
			});

			const canvasEl: HTMLCanvasElement = canvasRef.current;
			canvasEl.width = canvasSizeParams.width;
			canvasEl.height = canvasSizeParams.height;

			contextRef.current = canvasEl.getContext(
				"2d"
			) as CanvasRenderingContext2D;

			gameRef.current = createGame(
				canvasEl,
				contextRef.current,
				canvasSizeParams
			);

			refreshGameStatus();
		}
	}, [canvasRef.current, canvasWrapRef.current]);

	const start = () => {
		gameRef.current?.startGame();
		refreshGameStatus();
	};

	const takeCard = () => {
		gameRef.current?.takeCard();
		refreshGameStatus();
	};

	const startOpponentGame = () => {
		gameRef.current?.startOpponentGame();
		refreshGameStatus();
	};

	const restart = () => {
		gameRef.current?.restart();
		refreshGameStatus();
	};

	const renderControls = () => {
		if (gameStatus === "game") {
			return (
				<>
					<Button onClick={takeCard}>Взять еще</Button>
					<Button onClick={startOpponentGame}>Хватит</Button>
				</>
			);
		}

		if (gameStatus === "start") {
			return <Button onClick={start}>Старт</Button>;
		}

		const getText = () => {
			if (gameStatus === "lose") {
				return "Вы проиграли :(";
			}
			if (gameStatus === "win") {
				return "Вы выиграли!";
			}
			if (gameStatus === "nobody") {
				return "Ничья!";
			}
		};

		return (
			<>
				<Title>{getText()}</Title>
				<Button onClick={restart}>Заново</Button>
			</>
		);
	};

	return (
		<GameContent>
			<GameField>
				<CanvasWrap ref={canvasWrapRef}>
					<Canvas ref={canvasRef} />
				</CanvasWrap>
				<Controls>{renderControls()}</Controls>
			</GameField>
		</GameContent>
	);
};

export default Game;
