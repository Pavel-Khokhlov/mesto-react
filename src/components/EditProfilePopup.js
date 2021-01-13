import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";

const EditProfilePopup = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [uxSaveBtn, setUxSaveBtn] = useState("Сохранить");
  //const [uxAddBtn, setUxAddBtn] = useState("Добавить");


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
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
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
        className="popup__input"
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
