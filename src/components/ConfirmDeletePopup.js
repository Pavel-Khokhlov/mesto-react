import React from "react";
import PopupWithForm from "./PopupWithForm";

const ConfirmDeletePopup = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onConfirmDelete();
  };

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={`del-place`}
      title={`Вы уверенны?`}
      button={props.button}
      onSubmit={handleSubmit}
    />
  );
};

export default ConfirmDeletePopup;
