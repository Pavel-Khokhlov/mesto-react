import React, { useState, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  //const currentUser = useContext(CurrentUserContext);
  const [valueLink, setValueLink] = useState("");
  const [uxSaveBtn, setUxSaveBtn] = useState("Сохранить");
  const avatarLink = useRef("");

  const handleChangeAvatar = (e) => {
    setValueLink(e.target.value);
  };

  const handleSubmit = (e) => {
    setUxSaveBtn("Сохранение...");
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateAvatar({
      avatar: avatarLink.current.value,
    });
    setValueLink("");
    setUxSaveBtn("Сохранить");
  };

  const handleClose = () => {
    props.onClose();
    setValueLink('');
  };

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={handleClose}
      title={`Обновить аватар`}
      button={uxSaveBtn}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarLink}
        type="url"
        className="popup__input"
        placeholder="Ссылка на аватар"
        autoComplete="off"
        required
        value={valueLink}
        onChange={handleChangeAvatar}
      />
      <span id="avatarLink-error" className="popup__input-error" />
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
