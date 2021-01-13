import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const ConfirmDeletePopup = (props) => {
  const [uxDelBtn, setUxDelBtn] = useState("Да");

  const handleSubmit = (e) => {
    setUxDelBtn("Удаление...");
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onConfirmDelete();
    //handleClose();
    setUxDelBtn("Да");
  };

  //const handleClose = () => {
  //  props.onClose();
  //};

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={`del-place`}
      title={`Вы уверенны?`}
      button={uxDelBtn}
      onSubmit={handleSubmit}
    />
  );
};

export default ConfirmDeletePopup;
