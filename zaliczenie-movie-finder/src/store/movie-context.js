import React, { useState } from "react";

const MovieContext = React.createContext({
  movieList: [],
  errorMovie: false,
  addMovies: (movies) => {},
  checkForError: (value) => {},
});

export const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const addMoviesHandler = (movies) => {
    setMovies(movies);
  };

  const errorMovieHandler = (value) => {
    setError(value);
  };

  const contextValue = {
    errorMovie: error,
    movieList: movies,
    addMovies: addMoviesHandler,
    checkForError: errorMovieHandler,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
