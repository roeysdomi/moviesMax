import { API_URL,API_KEY } from "../config/apiConfig"
export const popularMoviesUrl =`${API_URL}movie/popular${API_KEY}`
export const nowPlayingMoviesUrl = `${API_URL}movie/now_playing${API_KEY}`
export const popularMoviesUrlByPage =`${API_URL}movie/popular${API_KEY}&page=pageNum`
export const nowPlayingMoviesUrlByPage = `${API_URL}movie/now_playing${API_KEY}&page=pageNum`
export const movieInfoByIdUrl =`${API_URL}movie/movie_id${API_KEY}`


