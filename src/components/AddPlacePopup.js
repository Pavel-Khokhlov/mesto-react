import React, { useState, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {
  const [valueTitle, setValueTitle] = useState("");
  const [valueCardLink, setValueCardLink] = useState("");
  const cardLink = useRef("");
  const cardTitle = useRef("");

  const handleChangeTitle = (e) => {
    setValueTitle(e.target.value);
  };

  const handleChangeCardLink = (e) => {
    setValueCardLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPlace({
      name: cardTitle.current.value,
      link: cardLink.current.value,
    });
    setValueTitle("");
    setValueCardLink("");
  };

  const handleClose = () => {
    props.onClose();
    setValueTitle("");
    setValueCardLink("");
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
        value={valueTitle}
        onChange={handleChangeTitle}
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
        value={valueCardLink}
        onChange={handleChangeCardLink}
      />
      <span id="placeLink-error" className="popup__input-error" />
    </PopupWithForm>
  );
};

export default AddPlacePopup;
