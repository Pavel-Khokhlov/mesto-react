import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const [value, setValue] = useState({
    link: "",
    linkValid: true,
    linkErrorMessage: "",
    formValid: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setValue({
        link: "",
        linkValid: true,
        linkErrorMessage: "",
        formValid: false,
      });
    }, 500);
  }, [props.isOpen]);

  const validateLink = (link) => {
    const reUrl = /^(ftp|http|https):\/\/[^ "]+$/;
    if (reUrl.test(link)) {
      setValue({
        link: link,
        linkValid: true,
        linkErrorMessage: "",
        formValid: true,
      });
    } else {
      setValue({
        link: link,
        linkValid: false,
        linkErrorMessage: "Check your link",
        formValid: false,
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
      onValid={value.formValid}
    >
      <input
        type="url"
        name="link"
        className={`popup__input ${
          !value.linkValid ? "popup__input_invalid" : ""
        }`}
        placeholder="Avatar's link"
        autoComplete="off"
        value={value.link || ""}
        onChange={handleInput}
      />
      <span
        id="avatarLink-error"
        className={`popup__input-error ${
          value.formValid ? "" : "popup__input-error_active"
        }`}
      >
        {value.linkErrorMessage}
      </span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
