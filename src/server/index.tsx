import express, { Request, Response } from "express";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ThemeProvider } from "styled-components";

import { theme } from "@/utils/theme";
import App from "@/pages/App";

const app = express();
const PORT = 3000;

const BUNDLE_FILE_NAME = "bundle.js";

function makeHTMLPage(content: string) {
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

app.get("*", (req: Request, res: Response) => {
	const appContentHTML = renderToString(
		<StaticRouter location={req.url}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</StaticRouter>
	);
	res.send(makeHTMLPage(appContentHTML));
});

app.listen(PORT, () => {
	console.log(`App on http://localhost:${PORT}`);
});
