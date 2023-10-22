import { MovieInfo } from "./MovieInfo";
import { animationHero3 } from "../../../lib/animations/animation";
import { useEffect,useRef } from "react";

export const HeroMovie = ({ movie }) => {

  return (
    <div className="pic-con   md:flex  md:flex-row  w-full h-full  custom-scrollbar overflow-y-scroll overflow-x-hidden">
      {/* <div style={{ background: `linear-gradient(to left,black , transparent)` }} className=" hidden md:block fade w-[50%] h-full absolute left-0 top-0 z-10"></div> */}
      <MoviePic movie={movie} />
      <MovieInfo movie={movie} />
    </div>
  );
};
export const MoviePic = ({ movie }) => {
  const myElement = useRef(null);
  useEffect(() => { 
    animationHero3(myElement)
  },[])
  return (
    <div  ref={myElement}  className="picture  h-full w-full md:h-full md:w-[50%] ">
      <img className="h-full m-auto md:w-[60%] " src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="movie poster" />
    </div>
  );
};
