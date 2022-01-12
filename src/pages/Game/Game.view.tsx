import React, { useEffect, useRef, useState } from "react";
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

	const [isStart, setStartStatus] = useState(true);
	const [gameStatus, setGameStatus] = useState<GameStatus>();
	const [canvasSizeParams, setCanvasSizeParams] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		if (canvasRef.current && canvasWrapRef.current) {
			setCanvasSizeParams({
				width:
					canvasWrapRef.current.clientWidth > 600
						? canvasWrapRef.current.clientWidth
						: 600,
				height:
					canvasWrapRef.current.clientHeight > 600
						? canvasWrapRef.current.clientHeight
						: 600,
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

			setGameStatus(gameRef.current?.gameStatus);
		}
	}, [canvasRef.current, canvasWrapRef.current]);

	const takeCard = () => {
		gameRef.current?.takeCard();
		setGameStatus(gameRef.current?.gameStatus);
	};

	const startOpponentGame = () => {
		gameRef.current?.startOpponentGame();
		setGameStatus(gameRef.current?.gameStatus);
	};

	const restart = () => {
		gameRef.current?.restart();
		setGameStatus(gameRef.current?.gameStatus);
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

	const renderContent = () => {
		if (isStart && false) {
			return <Button onClick={() => setStartStatus(false)}>Start game</Button>;
		}

		return (
			<GameField>
				<CanvasWrap ref={canvasWrapRef}>
					<Canvas ref={canvasRef} />
				</CanvasWrap>
				<Controls>{renderControls()}</Controls>
			</GameField>
		);
	};

	return <GameContent>{renderContent()}</GameContent>;
};

export default Game;
