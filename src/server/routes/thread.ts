import { Router } from "express";
import * as threadController from "../controllers/thread";

export const threads = Router();

threads.get("/", threadController.get);

threads.post("/", threadController.create);

threads.get("/:id", threadController.find);

threads.put("/:id", threadController.update);

threads.delete("/:id", threadController.destroy);
