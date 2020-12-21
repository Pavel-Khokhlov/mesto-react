import React from "react";

const ImagePopup = (props) => {
  return (
    <section
      className={
        props.card ? "popup popup-zoom popup_opened" : "popup popup-zoom"
      }
      onClick={props.onClose}
    >
      <figure
        className="popup-zoom__container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="button popup__close-btn"
          aria-label="Вернуться на страницу"
          onClick={props.onClose}
        />
        <img
          src={props.card.cardLink}
          alt={props.card.cardTitle}
          className="popup-zoom__image"
        />
        <figcaption className="popup-zoom__caption">
          {props.card.cardTitle}
        </figcaption>
      </figure>
    </section>
  );
};

export default ImagePopup;
