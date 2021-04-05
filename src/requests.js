const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "be929698aa8a9595adcab58c7a7a12fa";
const IMAGE_BASE_URL_ROW = `https://image.tmdb.org/t/p/w500/`;
const IMAGE_BASE_URL_BANNER = `https://image.tmdb.org/t/p/w1280/`;


const requests = {
  fetchTrending: `${API_URL}trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${API_URL}discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedTv: `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchHorrorMovies: `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=27`,
};

const titles = [
  "NETFLIX ORIGINALS",
  "Trending",
  "Top Rated Movies",
  "Top Rated Shows",
  "Horror Movies",
  "Comedy Movies",
  "Romance Movies",
  "Action Movies",
];

export { requests, IMAGE_BASE_URL_ROW, IMAGE_BASE_URL_BANNER, titles };
