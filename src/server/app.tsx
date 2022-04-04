import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import React from "react";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { routes } from "./routes";
import { csp } from "./middlewares/csp";
import { auth } from "./middlewares/auth";

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";

import App from "@/pages/App";
import configureStore from "@/store/store";
import { makeHTMLPage, BUNDLE_FILE_NAME } from "./renderHTML";

const PORT = 3000;
const app = express();
const store = configureStore({});

const options: any = {
	origin: ["http://localhost:5000"],
	methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
	allowedHeaders: ["Content-Type", "origin", "Authorization"],
};

app.use(csp());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(helmet.xssFilter());
app.use('*', cors(options) as any);

routes(app);

app.get("/*", auth);

app.use("/static", express.static(path.join(__dirname, "..", "dist", "static")));

app.get(`/${BUNDLE_FILE_NAME}`, (req: Request, res: Response) => {
	res.sendFile(path.resolve(__dirname, `../dist/${BUNDLE_FILE_NAME}`));
});

const sendIndex = (req: Request, res: Response) => {
	const appContentHTML = renderToString(
		<StaticRouter location={req.url}>
			<Provider store={store}>
				<App />
			</Provider>
		</StaticRouter>
	);

	res.send(makeHTMLPage(appContentHTML, store));
};

app.get("/", sendIndex);
app.get("/auth", sendIndex);
app.get("/auth/*", sendIndex);
app.get("/profile", sendIndex);
app.get("/board", sendIndex);
app.get("/forum", sendIndex);
app.get("/forum/*", sendIndex);
app.get("/game", sendIndex);

app.get("*", (req: Request, res: Response) => {
	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="X-UA-Compatible" content="ie=edge" />
				<title>21 points. Not Found</title>
			</head>
			<body>
				<h1>404</h1>
				<h2>Not Found</h2>
			</body>
		</html>
	`;
});

app.listen(PORT, () => {
	console.log(`App on http://localhost:${PORT}`);
});
