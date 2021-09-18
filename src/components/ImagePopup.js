import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeAllPopups, resetSelectedCard } from "../store/appSlice";
import { DELAY } from "../utils/config";

const ImagePopup = () => {
  const dispatch = useDispatch();
  const { isZoomImagePopupOpen, selectedCard } = useSelector(
    (state) => state.app
  );

  const setImageOpenClassName = `popup popup-zoom ${
    isZoomImagePopupOpen ? "popup_opened" : ""
  }`;

  const handleClose = () => {
    dispatch(closeAllPopups());
    setTimeout(() => {
      dispatch(resetSelectedCard());
    }, DELAY);
  };

  return (
    <section className={setImageOpenClassName} onClick={handleClose}>
      <figure
        className="popup-zoom__container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="button popup__close-btn"
          aria-label="Вернуться на страницу"
          onClick={handleClose}
        />
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="popup-zoom__image"
        />
        <figcaption className="popup-zoom__caption">
          {selectedCard.name}
        </figcaption>
      </figure>
    </section>
  );
};

export default ImagePopup;
