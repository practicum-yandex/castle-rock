import validationErrorHandler from "../validationErrorHandler";
import { body } from "express-validator";

const fieldsValidators = [
    body("title", "Title must not be empty.").trim().escape().isLength({
        min: 1,
        max: 50
    }),
    body("content", "Content must not be empty.").trim().escape().isLength({
        min: 1,
        max: 3000
    })
];

export default [...fieldsValidators, validationErrorHandler];
