import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const avatarLink = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateAvatar({
      link: avatarLink.current.value,
      fn: clearAvatarValue(),
    });
  };

  const handleClose = () => {
    props.onClose();
    clearAvatarValue();
  };

  const clearAvatarValue = () => {
    avatarLink.current.value = "";
  };

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={handleClose}
      title={`Обновить аватар`}
      button={props.button}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarLink}
        type="url"
        className="popup__input"
        placeholder="Ссылка на аватар"
        autoComplete="off"
        required
      />
      <span id="avatarLink-error" className="popup__input-error" />
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
