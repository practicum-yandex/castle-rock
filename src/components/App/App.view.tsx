import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/utils/theme";
import Button from "@/share/Button";

import { Title, GlobalStyles } from "./App.styles";

const App: React.FC = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<Title>Мой апп.</Title>
		<Button>Test button</Button>
	</ThemeProvider>
);

export default App;
