import express from "express";

import { users } from "./user";
import { themes } from "./theme";
import { threads } from "./thread";
import { comments } from "./comments";

export function routes(app: express.Application) {
  app.use("/api/user", users);
  app.use("/api/theme", themes);
  app.use("/api/thread", threads);
  app.use("/api/comment", comments);
}
