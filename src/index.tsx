import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { darkTheme } from "@/utils/theme";
import App from "./pages/App";
import configureStore from "./store/store";
import { startServiceWorker } from "./helpers/startServiceWorker";

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

export const store = configureStore(state);

ReactDOM.hydrate(
	<BrowserRouter>
		<Provider store={store}>
			<ThemeProvider theme={darkTheme}>
				<App />
			</ThemeProvider>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);

startServiceWorker();
