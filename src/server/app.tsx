import express, { Request, Response } from "express";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import configureStore from "@/store/store";
import { theme } from "@/utils/theme";
import App from "@/pages/App";

import { makeHTMLPage, BUNDLE_FILE_NAME } from "./renderHTML";
import { routes } from "./routes";

const app = express();
const PORT = 3000;

routes(app);

app.use(
	"/static",
	express.static(path.join(__dirname, "..", "dist", "static"))
);

app.get(`/${BUNDLE_FILE_NAME}`, (req: Request, res: Response) => {
	res.sendFile(path.resolve(__dirname, `../dist/${BUNDLE_FILE_NAME}`));
});

const store = configureStore({});

app.get("*", (req: Request, res: Response) => {
	const appContentHTML = renderToString(
		<StaticRouter location={req.url}>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</Provider>
		</StaticRouter>
	);

	res.send(makeHTMLPage(appContentHTML, store));
});

app.listen(PORT, () => {
	console.log(`App on http://localhost:${PORT}`);
});
