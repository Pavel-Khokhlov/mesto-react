import React from "react";

const ImagePopup = (props) => {
  const isImageOpen = props.isOpen;
  const setImageOpenClassName = `popup popup-zoom ${
    isImageOpen ? "popup_opened" : ""
  }`;

  return (
    <section className={setImageOpenClassName} onClick={props.onClose}>
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
          src={props.card.link}
          alt={props.card.name}
          className="popup-zoom__image"
        />
        <figcaption className="popup-zoom__caption">
          {props.card.name}
        </figcaption>
      </figure>
    </section>
  );
};

export default ImagePopup;
