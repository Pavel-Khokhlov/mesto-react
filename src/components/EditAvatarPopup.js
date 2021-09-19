import React from "react";
import { useFormWithValidation } from "./Hooks/useForm.jsx";
import { useSelector, useDispatch } from "react-redux";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input/Input.jsx";
import { DELAY } from "../utils/config.js";
import { closeAllPopups, resetUxButtons, setUxSaveBtn } from "../store/appSlice.js";
import { patchAvatar } from "../store/userSlice.js";

const EditAvatarPopup = () => {
  const dispatch = useDispatch();
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();
  const { isEditAvatarPopupOpen, uxSaveBtn } = useSelector((state) => state.app);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUxSaveBtn())
    dispatch(patchAvatar(values));
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
      isOpen={isEditAvatarPopupOpen}
      onClose={handleClose}
      title="Update avatar"
      button={uxSaveBtn}
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
