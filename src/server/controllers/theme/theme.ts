import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Theme } from "../../initDB";

export const findOrCreate = async (req: Request, res: Response) => {
	try {
		const [theme, _created] = await Theme.findOrCreate({
			where: {
				UserId: Number(req.params.UserId),
			},
			defaults: {
				name: "light",
			},
		});
		res.status(StatusCodes.OK).json(theme);
	} catch (e) {
		console.log(e);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
	}
};

export const createOrUpdate = async (req: Request, res: Response) => {
	try {
		const { UserId } = req.body;

		let theme = await Theme.findOne({
			where: {
				UserId,
			},
		});

		if (!theme) {
			theme = await Theme.create(req.body);
		} else {
			await theme.update(req.body);
		}

		res.sendStatus(StatusCodes.OK);
	} catch (e) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e);
	}
};
