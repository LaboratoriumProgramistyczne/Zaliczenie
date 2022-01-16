import React, { useState } from "react";
import useAos from "../../hooks/useAos";

const Modal = (props) => {
  const [showModal, setShowModal] = useState(true);
  useAos(400);

  const closeModalHandler = () => {
    setShowModal(false);
    props.closeModal();
  };

  const setMarkColor = (mark) => {
    if (mark >= 7.8) {
      return "modal__backdrop__green";
    } else if (mark >= 5.8) {
      return "modal__backdrop__orange";
    } else {
      return "modal__backdrop__red";
    }
  };

  return (
    <React.Fragment>
      {showModal && (
        <div className="modal" onClick={closeModalHandler}>
          <div className="modal__backdrop" data-aos="zoom-in">
            <h1 className="modal__backdrop__title">{props.title}</h1>
            <p className="modal__backdrop__description">{props.description}</p>
            <div className="modal__backdrop__mark">
              <p>
                Mark:{" "}
                <span className={`${setMarkColor(props.mark)}`}>
                  {props.mark}
                </span>
              </p>
            </div>
            <button className="modal__backdrop__btn">Close</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Modal;
