import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const [value, setValue] = useState({
    link: "",
    formErrors: "",
    linklValid: true,
    formValid: true,
  });

  const validateLink = (link) => {
    const reUrl = /^(ftp|http|https):\/\/[^ "]+$/;
    if (reUrl.test(link)) {
      setValue({
        link: link,
        formErrors: "",
        linklValid: false,
        formValid: false,
      });
    } else {
      setValue({
        link: link,
        formErrors: "Проверьте ссылку",
        linkValid: true,
        formValid: true,
      });
    }
  };

  const handleInput = (e) => {
    setValue(e.target.value);
    validateLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateAvatar({
      link: value.link,
      fn: clearAvatarValue(),
    });
  };

  const handleClose = () => {
    props.onClose();
    clearAvatarValue();
  };

  const clearAvatarValue = () => {
    setValue({ link: "", formErrors: "", linklValid: true, formValid: true });
  };

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={handleClose}
      title={`Обновить аватар`}
      button={props.button}
      onSubmit={handleSubmit}
      onValid={value.formValid}
    >
      <input
        type="url"
        name="link"
        className={`popup__input ${
          !value.linkValid ? "" : "popup__input_invalid"
        }`}
        placeholder="Ссылка на аватар"
        autoComplete="off"
        value={value.link || ""}
        onChange={handleInput}
      />
      <span
        id="avatarLink-error"
        className={`popup__input-error ${
          !value.formValid ? "" : "popup__input-error_active"
        }`}
      >
        {value.formErrors}
      </span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
