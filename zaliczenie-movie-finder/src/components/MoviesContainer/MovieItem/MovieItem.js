import React from "react";
import img from "../../../assets/images/error.png";

const IMG_API = process.env.REACT_APP_IMAGE_API_KEY;

const MovieItem = (props) => {
  return (
    <div className="movies__movie">
      <img
        src={props.poster_path ? IMG_API + props.poster_path : img}
        alt={props.title}
        onClick={props.onClick}
      />
    </div>
  );
};

export default MovieItem;
