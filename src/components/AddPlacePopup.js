import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormWithValidation } from "./Hooks/useForm.jsx";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input/Input.jsx";

import { DELAY } from "../utils/config.js";
import { newCard } from "../store/dataSlice.js";
import { closeAllPopups, resetUxButtons, setUxCreateBtn } from "../store/appSlice.js";

const AddPlacePopup = () => {
  const dispatch = useDispatch();
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();
  const { isAddPlacePopupOpen, uxCreateBtn } = useSelector((state) => state.app);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUxCreateBtn());
    dispatch(newCard(values));
    handleClose();
  };

  const handleClose = () => {
    dispatch(closeAllPopups());
    setTimeout(() => {
      resetForm();
      dispatch(resetUxButtons());
    }, DELAY);
  };

  return (
    <PopupWithForm
      isOpen={isAddPlacePopupOpen}
      onClose={handleClose}
      title="New place"
      button={uxCreateBtn}
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
