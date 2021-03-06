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
import { BoardService } from "@/services/BoardService";
import { useDispatch, useSelector } from "react-redux";
import { UserData } from "@/services/AuthService";
import { loadBoardData } from "@/store/reducers/board";
import { SoundKeys } from "@/models/Sounds";

type CanvasSizeParams = {
	width: number;
	height: number;
};

const createGame = (
	canvasEl: HTMLCanvasElement,
	canvasSizeParams: CanvasSizeParams
) => {
	const game21 = new Game21(
		canvasSizeParams.width,
		canvasSizeParams.height,
		canvasEl,
		canvasEl.getContext("2d") as CanvasRenderingContext2D
	);

	game21.start();

	return game21;
};

const Game: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvasWrapRef = useRef<HTMLDivElement>(null);
	const gameRef = useRef<Game21>();
	const dispatch = useDispatch();
	const [score, setScore] = useState<number>(0);
	const [gameStatus, setGameStatus] = useState<GameStatus>();
	const [canvasSizeParams, setCanvasSizeParams] = useState({
		width: 0,
		height: 0,
	});
	const user = useSelector<any, UserData>((state) => state.user.item);

	const addMember = () => {
		BoardService.updateMemberData(
			{
				data: { user: user.display_name, score21Uniq: score },
				ratingFieldName: "score21Uniq",
				teamName: user.display_name,
			},
			() => {
				dispatch(
					loadBoardData({
						cursor: 0,
						limit: 1000,
						ratingFieldName: "score21Uniq",
					})
				);
			}
		);
	};

	const refreshGameStatus = () => {
		const gameStatus = gameRef.current?.gameStatus;

		if (gameStatus === "win") {
			setScore((prev: number) => ++prev);
		}

		if (gameStatus === "lose") {
			addMember();
		}

		setGameStatus(gameStatus);
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

			gameRef.current = createGame(canvasEl, canvasSizeParams);

			refreshGameStatus();
		}
	}, [canvasRef.current, canvasWrapRef.current]);

	const start = () => {
		gameRef.current?.startGame();
		gameRef.current?.playSound(SoundKeys.CardDistribution);
		refreshGameStatus();
	};

	const takeCard = () => {
		gameRef.current?.takeCard();
		gameRef.current?.playSound(SoundKeys.GetCard);
		refreshGameStatus();
	};

	const startOpponentGame = () => {
		gameRef.current?.startOpponentGame();
		gameRef.current?.playSound(SoundKeys.EnoughCard);
		refreshGameStatus();
	};

	const restart = () => {
		gameRef.current?.restart();
		gameRef.current?.playSound(SoundKeys.CardDistribution);
		refreshGameStatus();
	};

	const renderControls = () => {
		if (gameStatus === "game") {
			return (
				<>
					<Button onClick={takeCard}>?????????? ??????</Button>
					<Button onClick={startOpponentGame}>????????????</Button>
				</>
			);
		}

		if (gameStatus === "start") {
			return <Button onClick={start}>??????????</Button>;
		}

		const getText = () => {
			if (gameStatus === "lose") {
				return "???? ?????????????????? :(";
			}
			if (gameStatus === "win") {
				return "???? ????????????????!";
			}
			if (gameStatus === "nobody") {
				return "??????????!";
			}
		};

		return (
			<>
				<Title>{getText()}</Title>
				<Button onClick={restart}>????????????</Button>
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
