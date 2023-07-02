import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'f1a48bce74b470ddc6475541cec139b4';

export const fecthTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  console.log(response.data.results);
  return response.data.results;
};

export const searchMovies = async keyword => {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&query=${keyword}`
    );
    console.log(response.data.results);
    return response.data.results;
}

export const fetchMovieDetails = async movieId => {
    const response = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    console.log(response.data);
    return response.data;
}

export const fetchActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    console.log(response.data.cast);
  return response.data.cast;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    console.log(response.data.results);
  return response.data.results;
};

