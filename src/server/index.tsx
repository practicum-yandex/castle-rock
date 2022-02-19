import express, { Request, Response } from "express";
import path from "path";
import React from "react";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";

import configureStore from "@/store/store";
import { theme } from "@/utils/theme";
import App from "@/pages/App";

const app = express();
const PORT = 3000;

const BUNDLE_FILE_NAME = "bundle.js";

export const renderObject = (data: unknown) =>
	serialize(data).replace(/</g, "\\\u003c");

function makeHTMLPage(content: string) {
	const scriptStore = renderToStaticMarkup(
		<script
			dangerouslySetInnerHTML={{
				__html: `window.__PRELOADED_STATE__ = ${renderObject(
					store.getState()
				)}`,
			}}
		/>
	);

	return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>21 points</title>
      </head>
      <body>
        <div id="root">${content}</div>
        ${scriptStore}
        <script src='./${BUNDLE_FILE_NAME}'></script>
      </body>
    </html>
  `;
}

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
	res.send(makeHTMLPage(appContentHTML));
});

app.listen(PORT, () => {
	console.log(`App on http://localhost:${PORT}`);
});
