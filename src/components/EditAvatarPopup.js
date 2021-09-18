import React from "react";
import { useFormWithValidation } from "./Hooks/useForm.jsx";
import { useSelector, useDispatch } from "react-redux";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input/Input.jsx";
import { DELAY } from "../utils/config.js";
import { closeAllPopups } from "../store/appSlice.js";
import { patchAvatar } from "../store/userSlice.js";

const EditAvatarPopup = ({ button }) => {
  const dispatch = useDispatch();
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();
  const { isEditAvatarPopupOpen } = useSelector((state) => state.app);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(patchAvatar(values));
    console.log(values);
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
      isOpen={isEditAvatarPopupOpen}
      onClose={handleClose}
      title="Update avatar"
      button={button}
      onSubmit={handleSubmit}
      onValid={isValid}
    >
      <Input
        type="url"
        inputName="link"
        labelName="Avatar's link"
        value={values.link || ""}
        onChange={handleChange}
        errors={errors.link}
      />
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
