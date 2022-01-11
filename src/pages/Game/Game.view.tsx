import React, { useEffect, useRef, useState } from "react";
import Button from "@/share/Button";
import {
	Canvas,
	CanvasWrap,
	GameContent,
	GameField,
	Controls,
} from "./Game.styles";
import Game21 from "./Game21";

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
	const [canvasSizeParams, setCanvasSizeParams] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		if (canvasRef.current && canvasWrapRef.current) {
			setCanvasSizeParams({
				width: canvasWrapRef.current.clientWidth,
				height: canvasWrapRef.current.clientHeight,
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
		}
	}, [canvasRef.current, canvasWrapRef.current]);

	const renderContent = () => {
		if (isStart && false) {
			return <Button onClick={() => setStartStatus(false)}>Start game</Button>;
		}

		return (
			<GameField>
				<CanvasWrap ref={canvasWrapRef}>
					<Canvas ref={canvasRef} />
				</CanvasWrap>
				<Controls>
					<Button onClick={() => gameRef.current?.takeCard()}>Взять еще</Button>
				</Controls>
			</GameField>
		);
	};

	return <GameContent>{renderContent()}</GameContent>;
};

export default Game;
