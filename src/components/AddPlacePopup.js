import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {
  const cardLink = useRef("");
  const cardTitle = useRef("");

  useEffect(() => {
    setTimeout(() => {
      clearProfileValue();
    }, 500);
  }, [props.isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPlace({
      name: cardTitle.current.value,
      link: cardLink.current.value,
      fn: clearProfileValue,
    });
  };

  const handleClose = () => {
    props.onClose();
  };

  const clearProfileValue = () => {
    cardTitle.current.value = "";
    cardLink.current.value = "";
  };

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={handleClose}
      title={`Новое место`}
      button={props.button}
      onSubmit={handleSubmit}
    >
      <input
        ref={cardTitle}
        type="text"
        id="placeName"
        name="name"
        className="popup__input popup__input_name-place"
        placeholder="Название"
        autoComplete="off"
        minLength={2}
        maxLength={30}
        required
      />
      <span id="placeName-error" className="popup__input-error" />
      <input
        ref={cardLink}
        type="url"
        id="placeLink"
        name="link"
        className="popup__input popup__input_link-place"
        placeholder="Ссылка на картинку"
        autoComplete="off"
        required
      />
      <span id="placeLink-error" className="popup__input-error" />
    </PopupWithForm>
  );
};

export default AddPlacePopup;
