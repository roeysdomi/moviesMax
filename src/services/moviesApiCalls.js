import axios from "axios";
import { popularMoviesUrl, nowPlayingMoviesUrl, movieInfoByIdUrl, popularMoviesUrlByPage, nowPlayingMoviesUrlByPage } from "../constant/apiUrls";
export async function getPopularMovies() {
  try {
    const response = await axios.get(popularMoviesUrl, {
      timeout: 5000,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.toString());
  }
}

export async function getNowPlayingMovies() {
  try {
    const response = await axios.get(nowPlayingMoviesUrl, {
      timeout: 5000,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.toString());
  }
}
export async function getMovieById(movie_Id) {
  try {
    const response = await axios.get(movieInfoByIdUrl.replace("movie_id", movie_Id), {
      timeout: 5000,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.toString());
  }
}

export async function getPopularMoviesByPage(pageNum) {
  try {
    const response = await axios.get(popularMoviesUrlByPage.replace("pageNum", pageNum), {
      timeout: 5000,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.toString());
  }
}

export async function getNowPlayingMoviesPage(pageNum) {
  try {
    const response = await axios.get(nowPlayingMoviesUrlByPage.replace("pageNum", pageNum), {
      timeout: 5000,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.toString());
  }
}
