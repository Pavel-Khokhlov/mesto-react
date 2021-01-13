import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={`Новое место`}
      button={props.button}
    >
      <input
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
