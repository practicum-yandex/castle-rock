import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameContent, Wrapper } from "./Game.styles";
import Title from "@/share/Title";
import Button from "@/share/Button";

export enum GAME_STATUSES {
	Run = 'Run',
	End = 'End',
	Start = 'Start'
}

const Game: React.FC = () => {
	const navigate = useNavigate();
	const [status, setGameStatus] = useState<GAME_STATUSES>(GAME_STATUSES.Start);

	const renderContent = (status: GAME_STATUSES) => {
		if (status === GAME_STATUSES.Start) {
			return <Button onClick={() => setGameStatus(GAME_STATUSES.Run)}>Start game</Button>
		}

		if (status === GAME_STATUSES.Run) {
			return <Wrapper>
				<Title>For now, you can only lose</Title>
				<Button onClick={() => setGameStatus(GAME_STATUSES.End)}>Lose</Button>
			</Wrapper>
		}

		if (status === GAME_STATUSES.End) {
			return <Wrapper>
				<Button onClick={() => setGameStatus(GAME_STATUSES.Run)}>Start a new batch</Button>
				<Button onClick={() => navigate("/", { replace: true })}>Log off</Button>
			</Wrapper>
		}
	};

	return <GameContent>{renderContent(status)}</GameContent>;
};

export default Game;
