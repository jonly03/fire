require("dotenv").config();

// Go to giphy api and get some gifs using Axios
const axios = require("axios");

const GIPHY_API_BASE_URL = "http://api.giphy.com/v1/gifs";
const SEARCH_KEYWORD = "kanye";

axios
  .get(
    `${GIPHY_API_BASE_URL}/search?api_key=${process.env.GIPHY_API_KEY}&q=${SEARCH_KEYWORD}`
  )
  .then((res) => {
    const gifs = res.data.data;
    gifs.map((gif) => {
      console.log(gif.images.downsized.url);
    });
  });
