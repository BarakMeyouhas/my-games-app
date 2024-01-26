import express, { NextFunction, Request, Response } from "express";
import { allGames, getGameById, searchGames } from "../Logic/AllGames";
const gameRouter = express.Router();

gameRouter.get(
  "/allGames",
  async (request: Request, response: Response, next: NextFunction) => {
    const data = await allGames();
    console.log(data);
    response.status(200).json(data);
    console.log(data);
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
        response.status(404).json({ message: "Game not found" });
        return;
      }

      response.status(200).json(game);
    } catch (error) {
      next(error);
    }
  }
);

gameRouter.get(
  "/searchGames/:searchTerm",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const searchTerm = request.params.searchTerm;

      if (!searchTerm) {
        response.status(400).json({ message: "Search term is required" });
        return;
      }

      const games = await searchGames(searchTerm);

      if (!games) {
        response.status(500).json({ message: "Internal server error" });
        return;
      }

      response.status(200).json(games);
    } catch (error) {
      next(error);
    }
  }
);

export default gameRouter;
