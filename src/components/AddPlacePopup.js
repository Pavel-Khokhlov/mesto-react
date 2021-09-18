import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormWithValidation } from "./Hooks/useForm.jsx";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input/Input.jsx";

import { DELAY } from "../utils/config.js";
import { newCard } from "../store/dataSlice.js";
import { closeAllPopups } from "../store/appSlice.js";

const AddPlacePopup = ({ button }) => {
  const dispatch = useDispatch();
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();
  const { isAddPlacePopupOpen } = useSelector((state) => state.app);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newCard(values));
    setTimeout(() => {
      handleClose();
    }, DELAY);
  };

  const handleClose = () => {
    dispatch(closeAllPopups());
    resetForm();
  };

  return (
    <PopupWithForm
      isOpen={isAddPlacePopupOpen}
      onClose={handleClose}
      title="New place"
      button={button}
      onSubmit={handleSubmit}
      onValid={isValid}
    >
      <Input
        type="text"
        inputName="name"
        labelName="Place title"
        value={values.name || ""}
        onChange={handleChange}
        errors={errors.name}
      />
      <Input
        type="url"
        inputName="link"
        labelName="Place link"
        value={values.link || ""}
        onChange={handleChange}
        errors={errors.link}
      />
    </PopupWithForm>
  );
};

export default AddPlacePopup;
