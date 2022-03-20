import { Router } from "express";
import * as commentController from "../controllers/comment";

export const comments = Router();

comments.get("/", commentController.find);

comments.post("/", commentController.create);

comments.delete("/:id", commentController.destroy);
