import { body } from "express-validator";
import validationErrorHandler from "../validationErrorHandler";

const fieldsValidators = [
	body("content", "Content must not be empty.").trim().escape().isLength({
		min: 1,
		max: 500,
	}),
];

export default [...fieldsValidators, validationErrorHandler];
