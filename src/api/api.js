import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'c8c5142f4be3b54c36c807e0ef85cecf',
  },
});

const getTrending = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};
const searchMovies = async search => {
  const { data } = await instance.get('/search/movie', {
    params: { query: search },
  });
  return data;
};
const getMovieById = async id => {
  const data = await instance.get(`/movie/${id}`);
  return data;
};
const getMovieReviews = async id => {
  const data = await instance.get(`/movie/${id}/reviews`);
  return data;
};
const getMovieCast = async id => {
  const data = await instance.get(`/movie/${id}/credits`);
  return data;
};
export {
  getTrending,
  searchMovies,
  getMovieById,
  getMovieReviews,
  getMovieCast,
};