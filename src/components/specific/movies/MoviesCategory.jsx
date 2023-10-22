import { useAsyncFunction } from "../../../hooks/useAsyncFunction";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../../../contexts/moviesContexts";
import { useContext, useState } from "react";
import { ErrorLoadingMovies } from "../../common/errors/errors";
import { LoadingMovies } from "../../common/loading/loading";
import { useEffect, useRef, memo } from "react";
import { animationHero } from "../../../lib/animations/animation";
import React from "react";
const MoviesGallery = ({ loading, results }) => {
  const myElement = useRef(null);
  useEffect(() => {
    if (results) {
      animationHero(myElement);
    }
  }, [results]);
  const navigate = useNavigate();
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <>
      {!loading &&
        results &&
        results.map((movie) => {
          if (!movie.id || !movie.poster_path || !movie.title) return null;
          return (
            <React.Fragment key={movie.poster_path + movie.id}>
              <div
                key={movie.poster_path + movie.id}
                ref={myElement}
                onClick={() => {
                  handleMovieClick(movie.id);
                }}
                className="bla  h-[90%] w-[40%] md:w-[50%] md:h-[50%] lg:w-[12%] lg:h-[90%] flex flex-col justify-center items-center flex-shrink-0   overflow-hidden m-2 md:m-0 md:hover:scale-110 md:active:scale-95 active:scale-95 cursor-pointer"
              >
                <img className="  h-[70%]  rounded-2xl " src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="movie_poster" />
                <div className=" m-2 movie-title flex  items-center justify-center flex-wrap text-white text-center w-[100%] h-[10%] text-xs lg:text-[10px] ">{movie.title}</div>
              </div>
            </React.Fragment>
          );
        })}
    </>
  );
};

const MemoizedMoviesGallery = memo(MoviesGallery);

export const MoviesCategory = ({ categoryName, asyncFunction, color, loadMoreFunction }) => {
  let { error, loading, results, setResults } = useAsyncFunction(asyncFunction);
  if (results?.results) {
    results = results?.results;
  }
  if (error) {
    return <ErrorLoadingMovies categoryName={categoryName} />;
  }
  if (loading) return <LoadingMovies />;
  return (
    <div className="category-con  flex flex-col h-[60%] md:h-[70%] p-3 relative  ">
      <div style={{ background: `linear-gradient(to top,${color} , transparent)` }} className="fade absolute bottom-0 left-0 w-full h-full "></div>
      <div className="below-fade absolute top-0 left-0 w-full h-full flex flex-col">
        <div className="title text-3xl  md:text-6xl m-3 md:p-3 text-gray-200">{categoryName}</div>
        <div className="con-gallery   w-full h-[90%]  custom-scrollbar  flex flex-row  overflow-x-auto overflow-y-hidden items-center">
          <MemoizedMoviesGallery loading={loading} results={results} />
          <LoadMoreButton asyncFunction={loadMoreFunction} setResults={setResults} results={results} />
        </div>
      </div>
    </div>
  );
};

export const FavoriteCategory = ({ categoryName, color }) => {
  const { data } = useContext(MoviesContext);
  if (!data.favorites[0]) return <></>;
  return (
    <div className="category-con  flex flex-col h-[60%] md:h-[70%] p-3 relative  ">
      <div style={{ background: `linear-gradient(to top,${color} , transparent)` }} className="fade absolute bottom-0 left-0 w-full h-full "></div>
      <div className="below-fade absolute top-0 left-0 w-full h-full flex flex-col">
        <div className="title text-3xl  md:text-6xl m-3 md:p-3 text-gray-200">{categoryName}</div>
        <div className="con-gallery   w-full h-[90%]  custom-scrollbar  flex flex-row  overflow-x-auto overflow-y-hidden items-center">
          <MemoizedMoviesGallery loading={false} results={data.favorites} />
        </div>
      </div>
    </div>
  );
};

export const LoadMoreButton = ({ asyncFunction, setResults, results }) => {
  const [pageNum, setPageNum] = useState(2);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data && results) setResults([...results, ...data]);
  }, [data]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await asyncFunction(pageNum);
      setData(response.results);
      setPageNum((prev) => prev + 1);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button className="h-[50%] p-5 bg-black text-white active:scale-95" onClick={fetchData}>
        {loading && <p>Loading...</p>}
        {!loading && <p> {">"} </p>}
        {error && <p>error</p>}
      </button>
    </div>
  );
};
