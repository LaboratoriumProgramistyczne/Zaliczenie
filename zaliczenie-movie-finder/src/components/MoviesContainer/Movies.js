import React, { useState, useEffect, useContext } from "react";
import MovieItem from "./MovieItem/MovieItem";
import Modal from "../UI/Modal";
import ReactDOM from "react-dom";
import MovieContext from "../../store/movie-context";
import ErrorModal from "../UI/ErrorModal";

const RANDOM = Math.floor(Math.random() * 500) + 1;
const API_KEY = `${process.env.REACT_APP_API_KEY + RANDOM}`;

const Movies = () => {
  const ctx = useContext(MovieContext);
  const [movieId, setMovieId] = useState();
  const [movieTitle, setMovieTitle] = useState();
  const [movieDescription, setMovieDescription] = useState();
  const [movieMark, setMovieMark] = useState();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch(API_KEY)
      .then((res) => res.json())
      .then((data) => {
        ctx.addMovies(data.results);
      });
  }, []);

  const closeModal = () => {
    setIsClicked(!isClicked);
  };

  const getMovieHandler = (id, title, description, mark) => {
    setMovieId(id);
    setMovieTitle(title);
    setMovieDescription(description);
    setMovieMark(mark);
    setIsClicked(true);
  };

  return (
    <React.Fragment>
      {isClicked
        ? ReactDOM.createPortal(
            <Modal
              title={movieTitle}
              description={movieDescription}
              mark={movieMark}
              closeModal={closeModal}
            />,
            document.getElementById("modal-portal")
          )
        : null}
      <div className="movies">
        {ctx.movieList.length > 0 &&
          ctx.movieList.map((movie) => {
            return (
              <MovieItem
                key={movie.id}
                {...movie}
                onClick={(event) =>
                  getMovieHandler(
                    movie.id,
                    movie.title,
                    movie.overview,
                    movie.vote_average
                  )
                }
              />
            );
          })}
      </div>
      {ctx.errorMovie && <ErrorModal />}
    </React.Fragment>
  );
};

export default Movies;
