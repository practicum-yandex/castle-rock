import express from "express";
import { users } from "./user";
import { threads } from "./thread";
import { comments } from "./comments";
import { themes } from "./themes";

export function routes(app: express.Application) {
	app.use("/api/user", users);
	app.use("/api/thread", threads);
	app.use("/api/comment", comments);
	app.use("/api/themes", themes);
}
