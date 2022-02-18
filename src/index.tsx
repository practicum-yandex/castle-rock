import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalFonts } from "@/vendor/fonts.styles";
import { GlobalStyles } from "@/vendor/global.styles";
import { theme } from "@/utils/theme";
import App from "./pages/App";
import configureStore from "./store/store";
import { startServiceWorker } from "./helpers/startServiceWorker";

export const store = configureStore();

ReactDOM.hydrate(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<GlobalFonts />
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById("root")
);

startServiceWorker();
