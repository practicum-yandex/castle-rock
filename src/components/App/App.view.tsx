import React from "react";

import Button from "@/share/Button";
import { GlobalStyles } from "@/utils/resetStyles";

import { Title } from "./App.styles";

const App: React.FC = () => (
	<>
		<GlobalStyles />
		<Title>Мой апп.</Title>
		<Button>Test button</Button>
	</>
);

export default App;
