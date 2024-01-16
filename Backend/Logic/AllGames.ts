import axios from "axios";

const gamesURL = "http://www.freetogame.com/api/games";
const gameByIdURL = "https://www.freetogame.com/api/game?id=";

const allGames = async () => {
  try {
    const response = await axios.get(gamesURL);
    return response.data;
  } catch (error) {
    return null;
  }
};

const getGameById = async (gameId: string) => {
  try {
    const response = await axios.get(`${gameByIdURL}${gameId}`);
    console.log(gameId);
    return response.data;
    
  } catch (error) {
    return null;
  }
};

export { allGames, getGameById };
