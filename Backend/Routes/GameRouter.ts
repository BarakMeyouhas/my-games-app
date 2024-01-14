import express, { NextFunction, Request, Response } from "express";
import { allGames } from "../Logic/AllGames";
const gameRouter = express.Router();

gameRouter.get(
    "/allGames",
    async (request: Request, response: Response, next: NextFunction) => {
        const data = await allGames();
        response.status(200).json(data)
        
    }
);

export default gameRouter;