import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeAllPopups, resetSelectedCard } from "../../store/appSlice";
import { DELAY } from "../../utils/config";
import Button from "../Button/Button";
import Popup from "./Popup";

const ImagePopup = () => {
  const dispatch = useDispatch();
  const { isZoomPopupOpen, selectedCard } = useSelector(
    (state) => state.app
  );

  const containerPopupClassName = `popup__container popup__container_zoom ${
    isZoomPopupOpen ? "popup__container_active" : ""
  }`;

  useEffect(() => {
    setTimeout(() => {
    }, DELAY);
  }, [isZoomPopupOpen]);

  const handleClose = () => {
    dispatch(closeAllPopups());
  };

  return (
    <Popup isOpen={isZoomPopupOpen}>
      <figure
        className={containerPopupClassName}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          type="button"
          className="button button_background button__close-popup"
          aria_label="back to the page"
          onClick={handleClose}
        />
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="popup__image"
        />
        <figcaption className="title title__caption text__color_white">
          {selectedCard.name}
        </figcaption>
      </figure>
    </Popup>
  );
};

export default ImagePopup;
