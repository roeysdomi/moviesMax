import { getPopularMovies, getNowPlayingMovies,getNowPlayingMoviesPage,getPopularMoviesByPage } from "../services/moviesApiCalls.js";
import { MoviesCategory, FavoriteCategory } from "../components/specific/movies/MoviesCategory";
import { HeroSection } from "../components/specific/HeroSection";
export const MoviesLayout = () => {
  const categories = [
    {
      categoryName: "Popular",
      asyncFunction: getPopularMovies,
      loadMoreFunction:getPopularMoviesByPage,
      color: "blue",
    },
    {
      categoryName: "playing Now",
      asyncFunction: getNowPlayingMovies,
      loadMoreFunction:getNowPlayingMoviesPage,
      color: "red",
    },
  ];
  return (
    <>
      <HeroSection />
      {categories.map((movie) => {
        return <MoviesCategory key={movie.categoryName} loadMoreFunction={ movie.loadMoreFunction} categoryName={movie.categoryName} asyncFunction={movie.asyncFunction} color={movie.color} />;
      })}
      <FavoriteCategory categoryName="Favorites" color="green" />
    </>
  );
};
