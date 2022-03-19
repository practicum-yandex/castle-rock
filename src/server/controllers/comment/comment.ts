import { StatusCodes } from "http-status-codes";
import { Comment } from "../../initDB";
import { Request, Response } from "express";
import validation from "./validation";

export const find = async (req: Request, res: Response) => {
    try {
        const comments = await Comment.findAll({ 
            where: { 
                thread_id: req.params.thread_id 
            } 
        });
        res.status(StatusCodes.OK).json(comments);
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
    }
};

export const create = [
    ...validation,
    async (req: Request, res: Response) => {
        try {
            const comment = await Comment.create(req.body);
            res.status(StatusCodes.CREATED).json(comment);
        } catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
        }
    },
];

export const destroy = async (req: Request, res: Response) => {
    try {
        await Comment.destroy({
            where: {
                id: req.params.id,
            },
    });
        res.sendStatus(StatusCodes.OK);
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
    }
};
