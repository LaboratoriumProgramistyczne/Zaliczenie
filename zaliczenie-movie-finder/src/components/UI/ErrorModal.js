import React from "react";
import notFound from "../../assets/images/notFound.png";

const ErrorModal = () => {
  const refreshHandler = () => {
    window.location.reload();
  };

  return (
    <div className="movies__notFound">
      <img src={notFound} alt="Movies not found..." />
      <button className="movies__notFound__btn" onClick={refreshHandler}>
        Refresh
      </button>
    </div>
  );
};

export default ErrorModal;
