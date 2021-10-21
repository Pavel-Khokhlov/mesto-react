import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormWithValidation } from "../Hooks/useForm.jsx";
import PopupWithForm from "./PopupWithForm";
import Input from "../Input/Input.jsx";

import { DELAY } from "../../utils/config.js";
import { newCard } from "../../store/dataSlice.js";
import { closeAllPopups, setUxBtnTitle } from "../../store/appSlice.js";

const AddPlacePopup = () => {
  const dispatch = useDispatch();
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();
  const { isAddPlacePopupOpen } = useSelector((state) => state.app);
  const { status } = useSelector((state) => state.data);

  useEffect(() => {
    setTimeout(() => {
      resetForm();
    }, DELAY);
  }, [isAddPlacePopupOpen]);

  useEffect(() => {
    if (status !== "resolved") {
      return;
    } else {
      dispatch(closeAllPopups());
      setTimeout(() => {
        dispatch(setUxBtnTitle(null));
      }, DELAY);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUxBtnTitle(`Creating...`));
    dispatch(newCard(values));
  };

  return (
    <PopupWithForm
      isOpen={isAddPlacePopupOpen}
      title="New place"
      formReset={resetForm}
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
