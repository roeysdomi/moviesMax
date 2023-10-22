export const ErrorLoadingMovies = ({ categoryName }) => {
  return (
    <div className="category-con  flex-center-center h-[60%] md:h-[70%] p-3 relative  ">
      <div className="con-error  p-5 text-2xl border-2 border-red-600 text-white">{`There seems to be  a problem with loading "${categoryName}", try again later`}</div>
    </div>
  );
};

export const ErrorLoadingMovieId = () => {
    return (
      <div className="category-con  flex-center-center h-[60%] md:h-[70%] p-3 relative  ">
        <div className="con-error  p-5 text-2xl border-2 border-red-600 text-white">{`There seems to be  a problem with loading the info, try again later`}</div>
      </div>
    );
  };
