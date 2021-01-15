import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const ConfirmDeletePopup = (props) => {
  const [uxDelBtn, setUxDelBtn] = useState("Да");

  const handleSubmit = (e) => {
    setUxDelBtn("Удаление...");
    e.preventDefault();
    props.onConfirmDelete();
    setUxDelBtn("Да");
  };

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
