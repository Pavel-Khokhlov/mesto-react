import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarUseRef = (props) => {
  const inputRef = useRef("");
  let isFormValid = true;

  useEffect(() => {
    setTimeout(() => {
      inputRef.current.value = "";
    }, 500);
  }, [props.isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateAvatar({
      link: inputRef.current.value,
    });
  };

  const handleClose = () => {
    props.onClose();
  };

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={handleClose}
      title={`Update avatar`}
      button={props.button}
      onSubmit={handleSubmit}
      onValid={isFormValid}
    >
      <input
        ref={inputRef}
        type="url"
        name="link"
        className="popup__input"
        placeholder="Avatar's link"
        autoComplete="off"
      />
      <span id="avatarLink-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
};

export default EditAvatarUseRef;
