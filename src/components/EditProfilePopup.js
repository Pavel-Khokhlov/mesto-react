import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";

const EditProfilePopup = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [uxSaveBtn, setUxSaveBtn] = useState("Сохранить");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    setUxSaveBtn("Сохранение...");
    e.preventDefault();
    props.onUpdateUser(name, description);
    setUxSaveBtn("Сохранить");
  };

  const handleClose = () => {
    props.onClose();
    setName(currentUser.name);
    setDescription(currentUser.about);
  };

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={handleClose}
      title={`Редактировать профиль`}
      button={uxSaveBtn}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input"
        placeholder="Имя Фамилия"
        value={name || ''}
        onChange={handleChangeName}
      />
      <span id="fullName-error" className="popup__input-error" />
      <input
        type="text"
        className="popup__input"
        placeholder="Профессия или должность"
        value={description || ''}
        onChange={handleChangeDescription}
      />
      <span id="jobPosition-error" className="popup__input-error" />
    </PopupWithForm>
  );
};

export default EditProfilePopup;
