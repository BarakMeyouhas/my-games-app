import axios from "axios";

const gamesURL =
  "https://api.rawg.io/api/games?key=c1cff7ce8544427797e07592e1e53079&dates=2018-01-01,2018-12-31&ordering=-added&page=1";
const gameByIdURL = "https://api.rawg.io/api/games";
const searchGamesURL = "https://api.rawg.io/api/games?search=";

const allGames = async () => {
  try {
    const response = await axios.get(gamesURL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return null;
  }
};

const getGameById = async (gameId: string) => {
  try {
    const response = await axios.get(`${gameByIdURL}/${gameId}`);
    console.log(gameId);
    return response.data;
  } catch (error) {
    return null;
  }
};

const searchGames = async (searchTerm: string) => {
  try {
    const response = await axios.get(
      `${searchGamesURL}${searchTerm}&key=c1cff7ce8544427797e07592e1e53079`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return null;
  }
};

export { allGames, getGameById, searchGames };
