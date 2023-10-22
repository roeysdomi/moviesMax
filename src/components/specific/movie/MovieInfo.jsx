import { useContext } from "react";
import { MoviesContext } from "../../../contexts/moviesContexts";
import { animationHero2 } from "../../../lib/animations/animation";
import { useEffect,useRef } from "react";

export const MovieInfo = ({ movie }) => {
  const myElement = useRef(null);
  const { original_title, release_date, vote_average, original_language, runtime, overview } = movie;
  const { addToDataArray, isFavorite, removeFromFavorites } = useContext(MoviesContext);
  useEffect(() => { 
    animationHero2(myElement)
  },[])
  const handleAddToFavorites = (movie) => {
    if (!isFavorite(movie.id)) {
      addToDataArray("favorites", movie);
    } else {
      removeFromFavorites(movie.id);
    }
  };

  return (
    <div ref={myElement} className="movie-info h-full w-full md:h-full md:w-[50%]  text-white  flex flex-col items-center mt-4">
      <div
        className="addToFav cursor-pointer border-white border-2 p-2 text-xs md:text-sm md:p-5"
        style={
          !isFavorite(movie.id)
            ? {
                borderColor: "green",
              }
            : {
                borderColor: "red",
              }
        }
        onClick={() => {
          handleAddToFavorites(movie);
        }}
      >
        {!isFavorite(movie.id) ? " Add to favorite +" : "Remove from favorite"}
      </div>
      {original_title && <div className="con-title  h-[30%] md:h-[30%] w-full flex-center-center  text-center text-1xl md:text-sm">{movie.original_title}</div>}
      <div className="sub-info h-[30%] w-full  flex items-center justify-around text-yellow-200 border-t-[1px] border-b-[1px] border-gray-400 md:border-transparent">
        {release_date && <div className="release_date   w-full  border-r-2 flex-center-center text-xs md:text-sm md:p-7 ">{release_date.split("-")[0]}</div>}
        {vote_average && <div className="vote_average  w-full  border-r-2 flex-center-center text-xs md:text-sm md:p-7 ">{vote_average.toString().substring(0, 3)}</div>}
        {original_language && <div className="original_language  w-full  flex-center-center text-xs md:text-sm border-r-2   md:p-7">{original_language}</div>}
        {runtime && <div className="runtime w-full text-xs  md:p-7 flex-center-center md:text-sm ">{runtime} min</div>}
      </div>
      {overview && <div className="con-movie-desc overflow-y-scroll  custom-scrollbar overflow-x-hidden p-8 w-full h-[40%] text-sm md:text-sm">{overview}</div>}
    </div>
  );
};
