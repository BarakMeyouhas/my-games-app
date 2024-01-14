import axios from "axios";

const gamesURL = "http://www.freetogame.com/api/games";

const allGames = async () => {
  try {
    const response = await axios.get(gamesURL);
    return response.data;
  } catch (error) {
    return null;
  }
};

export { allGames };
