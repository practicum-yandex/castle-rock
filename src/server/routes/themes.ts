import { Router } from "express";
import * as themeController from "../controllers/theme";

export const themes = Router();

themes.get("/:UserId", themeController.findOrCreate);

themes.post("/", themeController.createOrUpdate);
