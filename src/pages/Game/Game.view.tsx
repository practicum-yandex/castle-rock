import React, { useState } from "react";

import Button from "@/share/Button";

import { GameContent } from "./Game.styles";

const Game: React.FC = () => {
	const [isStart, setStartStatus] = useState(true);

	const renderContent = () => {
		if (isStart) {
			return <Button onClick={() => setStartStatus(false)}>Start game</Button>;
		}

		return "This is a game";
	};

	return <GameContent>{renderContent()}</GameContent>;
};

export default Game;
