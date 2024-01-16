import express, { NextFunction, Request, Response } from "express";
import { allGames, getGameById } from "../Logic/AllGames";
const gameRouter = express.Router();

gameRouter.get(
  "/allGames",
  async (request: Request, response: Response, next: NextFunction) => {
    const data = await allGames();
    response.status(200).json(data);
  }
);

gameRouter.get(
  "/gameDetails/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const gameId = request.params.id;
      console.log(gameId);
      const game = await getGameById(gameId);

      if (!game) {
        // Game not found
        response.status(404).json({ message: "Game not found" });
        return;
      }

      response.status(200).json(game);
    } catch (error) {
      next(error);
    }
  }
);

export default gameRouter;
