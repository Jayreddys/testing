import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchfromTMDB = async (url) => {
  console.log("Fetching data from TMDB...");
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + `${ENV_VARS.TMDB_API_KEY}`,
    },
  };
  console.log(url);
  console.log("TMDB API Key: ", ENV_VARS.TMDB_API_KEY.type());
  try {
    const response = await axios.get(url, options);
    console.log("Response:", response.data); // Log the response
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to fetch data from TMDB" + response.statusText);
  }
  return response.data;
};
