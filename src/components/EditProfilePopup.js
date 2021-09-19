import React, { useEffect } from "react";
import { useFormWithValidation } from "./Hooks/useForm.jsx";
import { useSelector, useDispatch } from "react-redux";

import PopupWithForm from "./PopupWithForm";
import Input from "./Input/Input.jsx";
import { DELAY } from "../utils/config.js";
import { patchProfile } from "../store/userSlice.js";
import { closeAllPopups, resetUxButtons, setUxSaveBtn } from "../store/appSlice.js";

const EditProfilePopup = () => {
  const dispatch = useDispatch();
  const { values, errors, isValid, handleChange, resetFormCurrentUser } =
    useFormWithValidation();
  const { isEditProfilePopupOpen, uxSaveBtn } = useSelector((state) => state.app);

  useEffect(() => {
    resetFormCurrentUser();
  }, [isEditProfilePopupOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUxSaveBtn())
    dispatch(patchProfile(values));
    setTimeout(() => {
      handleClose();
    }, DELAY);
  };

  const handleClose = () => {
    dispatch(closeAllPopups());
    setTimeout(() => {
      resetFormCurrentUser();
      dispatch(resetUxButtons());
    }, DELAY);
  };

  return (
    <PopupWithForm
      isOpen={isEditProfilePopupOpen}
      onClose={handleClose}
      title="Edit profile"
      button={uxSaveBtn}
      onSubmit={handleSubmit}
      onValid={isValid}
    >
      <Input
        type="text"
        inputName="name"
        labelName="First and Last name"
        value={values.name || ""}
        onChange={handleChange}
        errors={errors.name}
      />
      <Input
        type="text"
        inputName="about"
        labelName="Profession"
        value={values.about || ""}
        onChange={handleChange}
        errors={errors.about}
      />
    </PopupWithForm>
  );
};

export default EditProfilePopup;
