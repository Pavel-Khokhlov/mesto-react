import React from "react";

const ImagePopup = (props) => {

  return (
    <section
      className={
        props.isOpen ? "popup popup-zoom popup_opened" : "popup popup-zoom"
      }
    >
      <figure className="popup-zoom__container">
        <button
          type="button"
          className="button popup__close-btn"
          aria-label="Вернуться на страницу"
          onClick={props.onClose}
        />
        <img
          src={props.link}
          alt={props.title}
          className="popup-zoom__image"
          onClick={(e) => e.stopPropagation()}
        />
        <figcaption className="popup-zoom__caption">{props.title}</figcaption>
      </figure>
    </section>
  );
};

export default ImagePopup;
