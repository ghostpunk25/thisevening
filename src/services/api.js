import axios from "axios";

const API_KEY = 'bb57fc1f55d743e80077a0ce49d67a5f';
const fetchApi = axios.create({
   baseURL: 'https://api.themoviedb.org/3/',
   params: {
      page: 1,
      language: 'ru-RUS',
   },
});


export const getTrendingMovies = async (type = 'movie', time = 'day') => {
   const response = await fetchApi.get(`trending/${type}/${time}?api_key=${API_KEY}`);
   return response.data;
};

export const getMoviesSearch = async movie => {
   const response = await fetchApi.get(`search/movie?api_key=${API_KEY}&query=${movie}`);
   return response.data;
};

export const getMovieDetails = async movieId => {
   const response = await fetchApi.get(`movie/${movieId}?api_key=${API_KEY}`);
   return response.data;
};

export const getMovieCredits = async movieId => {
   const response = await fetchApi.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
   return response.data;
};

export const getMovieReviews = async movieId => {
   const response = await fetchApi.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
   return response.data;
};

export const getTopRatedMovies = async () => {
   const response = await fetchApi.get(`movie/top_rated?api_key=${API_KEY}`);
   return response.data;
};