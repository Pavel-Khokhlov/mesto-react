import React, { useState, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const [valueLink, setValueLink] = useState("");
  const avatarLink = useRef("");

  const handleChangeAvatar = (e) => {
    setValueLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarLink.current.value,
    });
    setValueLink("");
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
      button={props.button}
      onSubmit={handleSubmit}
      //onKeyDown={props.onKeyDown}
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
