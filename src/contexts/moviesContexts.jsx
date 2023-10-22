import  { createContext, useEffect, useState } from "react";

export const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [data, setData] = useState({
    playingNow: [],
    popular: [],
    favorites: [],
  });

  useEffect(() => {
    const savedData = localStorage.getItem("movieData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const addToDataArray = (key, newObject) => {
    setData((prevData) => {
      const alreadyExists = prevData[key].some((movie) => movie.id === newObject.id);
      if (alreadyExists) {
        return prevData;
      }
      const updatedData = {
        ...prevData,
        [key]: [...prevData[key], newObject],
      };
      localStorage.setItem("movieData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const isFavorite = (movieId) => {
    return data.favorites.some((movie) => movie.id === movieId);
  };
  const removeFromFavorites = (movieId) => {
    setData((prevData) => {
      const updatedData = {
        ...prevData,
        favorites: prevData.favorites.filter((movie) => movie.id !== movieId),
      };
      localStorage.setItem("movieData", JSON.stringify(updatedData)); // Save to local storage
      return updatedData;
    });
  };

 

  return <MoviesContext.Provider value={{ data, setData, addToDataArray, isFavorite, removeFromFavorites }}>{children}</MoviesContext.Provider>;
}
