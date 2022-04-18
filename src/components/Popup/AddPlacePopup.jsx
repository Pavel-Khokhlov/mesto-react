import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PopupWithForm from "./PopupWithForm";
import Input from "../Input/Input.jsx";

import { DELAY } from "../../utils/config.js";
import { newCard } from "../../store/dataSlice.js";
import { closeAllPopups, setUxBtnTitle } from "../../store/appSlice.js";
import {
  disableButton,
  handleValueChange,
  resetForm,
  validateForm,
  validateInput,
} from "../../store/formSlice.js";

const AddPlacePopup = () => {
  const dispatch = useDispatch();
  const { isAddPlacePopupOpen } = useSelector((state) => state.app);
  const { values, errors, isFormValid } = useSelector((state) => state.form);
  const { statusData } = useSelector((state) => state.data);

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetForm());
    }, DELAY);
  }, [isAddPlacePopupOpen]);

  useEffect(() => {
    if (statusData !== "resolved") return;
    dispatch(closeAllPopups());
  }, [statusData]);

  const handleInputChange = (e) => {
    const target = e.target;
    dispatch(handleValueChange({ name: target.name, value: target.value }));
    dispatch(validateInput(target.name));
    dispatch(validateForm(["name", "link"]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUxBtnTitle(`Creating...`));
    dispatch(disableButton());
    dispatch(newCard(values));
  };

  return (
    <PopupWithForm
      isOpen={isAddPlacePopupOpen}
      title="New place"
      onSubmit={handleSubmit}
      onValid={isFormValid}
    >
      <Input
        type="text"
        inputName="name"
        labelName="Place title"
        onChange={handleInputChange}
        value={values.name}
        error={errors.name}
      />
      <Input
        type="url"
        inputName="link"
        labelName="Place link"
        onChange={handleInputChange}
        value={values.link}
        error={errors.link}
      />
    </PopupWithForm>
  );
};

export default AddPlacePopup;
