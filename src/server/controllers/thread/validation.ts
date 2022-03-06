import validationErrorHandler from "../validationErrorHandler";
import { body } from "express-validator";

const fieldsValidators = [
    body("title", "Title must not be empty.").trim().escape().isLength({
        min: 1,
    }),
    body("content", "Content must not be empty.").trim().escape().isLength({
        min: 1,
    }),
    body("userId", "User ID must not be empty.").trim().escape().isLength({
        min: 1,
    }),
];

export default [...fieldsValidators, validationErrorHandler];
