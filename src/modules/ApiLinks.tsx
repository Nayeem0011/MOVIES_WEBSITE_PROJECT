export const apiKey = "6219dd30966f68fdf859cfd214d2a0ad";
export const baseUrl = "https://api.themoviedb.org/3";


//*Movies Endpoint
export const popular = `${baseUrl}/movie/popular?api_key=${apiKey}`;
export const upcoming = `${baseUrl}/movie/upcoming?api_key=${apiKey}`;
export const now_playing = `${baseUrl}/movie/now_playing?api_key=${apiKey}`;
export const top_rated_movies = `${baseUrl}/movie/top_rated?api_key=${apiKey}`;


//*TV SHOWS Endpoint
export const popularShows = `${baseUrl}/tv/popular?api_key=${apiKey}`;
export const trendingShows = `${baseUrl}/trending/tv/week?api_key=${apiKey}`;
export const top_rated_shows = `${baseUrl}/tv/top_rated?api_key=${apiKey}`;
export const airing_today = `${baseUrl}/tv/airing_today?api_key=${apiKey}`;
export const detailsTv = `${baseUrl}/tv/tv_id?api_key=${apiKey}`;
export const similarTv = `${baseUrl}/tv/tv_id/similar?api_key=${apiKey}`;
