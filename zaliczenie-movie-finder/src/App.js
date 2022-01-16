import "./App.scss";
import React from "react";
import Search from "./components/SearchComponent/Search";
import Header from "./components/HeaderContainer/Header";
import Movies from "./components/MoviesContainer/Movies";

function App() {
  return (
    <React.Fragment>
      <Search />
      <Header />
      <Movies />
    </React.Fragment>
  );
}

export default App;
