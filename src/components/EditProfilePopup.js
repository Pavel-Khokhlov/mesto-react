import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";

const EditProfilePopup = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name: name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={`edit-profile`}
      title={`Редактировать профиль`}
      button={props.button}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="fullName"
        className="popup__input popup__input_name-profile"
        placeholder="Имя Фамилия"
        autoComplete="off"
        minLength={2}
        maxLength={40}
        required
        value={name}
        onChange={handleChangeName}
      />
      <span id="fullName-error" className="popup__input-error" />
      <input
        type="text"
        id="jobPosition"
        className="popup__input popup__input_job-profile"
        placeholder="Профессия или должность"
        autoComplete="off"
        minLength={2}
        maxLength={200}
        required
        value={description}
        onChange={handleChangeDescription}
      />
      <span id="jobPosition-error" className="popup__input-error" />
    </PopupWithForm>
  );
};

export default EditProfilePopup;
