import { Routes, Route } from "react-router-dom";
import { MoviesLayout } from "../layouts/moviesLayout";
import { MovieLayOut } from "../layouts/movieLayout";
const HomeRouts = () => {
  return (
    <Routes>
      <Route exact path="/movie/:movieId" element={<MovieLayOut />} />
      <Route path="*" element={<MoviesLayout />} />
    </Routes>
  );
};

export default HomeRouts;
