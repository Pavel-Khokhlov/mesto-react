import React, { useState, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  //const currentUser = useContext(CurrentUserContext);
  const [value, setValue] = useState("");
  const avatarLink = useRef("");

  const handleChangeAvatar = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props
      .onUpdateAvatar({
        avatar: avatarLink.current.value,
      })
  };

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={`edit-avatar`}
      title={`Обновить аватар`}
      button={props.button}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarLink}
        type="url"
        className="popup__input popup__input_avatar-link"
        placeholder="Ссылка на аватар"
        autoComplete="off"
        required
        value={value}
        onChange={handleChangeAvatar}
      />
      <span id="avatarLink-error" className="popup__input-error" />
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
