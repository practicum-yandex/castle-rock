import { StatusCodes } from "http-status-codes";
import { Thread } from "../../initDB";
import { Request, Response } from "express";
import validation from "./validation";

export const get = async (req: Request, res: Response) => {
    try {
        const threads = await Thread.findAll();
        res.status(StatusCodes.OK).json(threads);
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
    }
};

export const create = [
    ...validation,
    async (req: Request, res: Response) => {
        try {
            const thread = await Thread.create(req.body);
            res.status(StatusCodes.CREATED).json(thread);
        } catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
        }
    },
];

export const find = async (req: Request, res: Response) => {
    try {
        const thread = await Thread.findByPk(req.params.id);
        res.json(thread);
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
    }
};

export const update = [
    ...validation,
    async (req: Request, res: Response) => {
        try {
            await Thread.update(req.body, { where: { id: req.params.id } });
            res.sendStatus(StatusCodes.OK);
        } catch (e) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
        }
    },
];

export const destroy = async (req: Request, res: Response) => {
    try {
        await Thread.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.sendStatus(StatusCodes.OK);
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
    }
};
