import React, { useContext, useRef } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import MovieContext from "../../store/movie-context";

const SEARCH_API = process.env.REACT_APP_SEARCH_API_KEY;

function Search() {
  let inputRef = useRef();
  const ctx = useContext(MovieContext);

  const showUserMovie = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      fetch(SEARCH_API + inputRef.current.value)
        .then((res) => res.json())
        .then((data) => {
          data.results.length === 0
            ? ctx.checkForError(true)
            : ctx.checkForError(false);
          ctx.addMovies(data.results);
        });
      inputRef.current.value = "";
    }
  };

  return (
    <form className={"search"} onSubmit={showUserMovie}>
      <input
        id="search"
        type="search"
        role="search"
        placeholder="Search movie"
        className="search__input"
        ref={inputRef}
      />
      <button className={"search__btn"}>
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
