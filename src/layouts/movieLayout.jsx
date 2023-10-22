
import { getMovieById } from "../services/moviesApiCalls";
import { useAsyncFunction } from "../hooks/useAsyncFunction";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { ErrorLoadingMovieId } from "../components/common/errors/errors"
import {LoadingMovies} from "../components/common/loading/loading"
import {HeroMovie} from "../components/specific/movie/MoviePic"

export const MovieLayOut = () => {
  const { movieId } = useParams();
  const MovieByIdCallBack = useCallback(async () => {
    return getMovieById(movieId);
  }, []);
  const { error, loading, results } = useAsyncFunction(MovieByIdCallBack);

  if(error) return <ErrorLoadingMovieId />
  if (loading) return <LoadingMovies/>
  return (
    <>
      <div className="con-movie-by-id   w-full h-[85%] flex-center-center">
        <div className="con-center flex-center-center w-full md:w-[80%] h-full">
          <HeroMovie movie={results} />
        </div>
      </div>
    </>
  );
};



