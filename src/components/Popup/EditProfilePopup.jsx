import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PopupWithForm from "./PopupWithForm";
import Input from "../Input/Input.jsx";
import { DELAY } from "../../utils/config.js";
import { editProfile } from "../../store/userSlice.js";
import { closeAllPopups, setUxBtnTitle } from "../../store/appSlice.js";
import {
  disableButton,
  handleValueChange,
  resetFormCurrentUser,
  validateForm,
  validateInput,
} from "../../store/formSlice.js";

const EditProfilePopup = () => {
  const dispatch = useDispatch();
  const { isEditProfilePopupOpen } = useSelector((state) => state.app);
  const { currentUser, statusUser } = useSelector((state) => state.users);
  const { values, errors, isFormValid } = useSelector((state) => state.form);

  useEffect(() => {
    if (isEditProfilePopupOpen === true)
      dispatch(resetFormCurrentUser(currentUser));
    setTimeout(() => {
      dispatch(resetFormCurrentUser(currentUser));
    }, DELAY);
  }, [isEditProfilePopupOpen]);

  useEffect(() => {
    if (statusUser !== "resolved") return;
    dispatch(closeAllPopups());
  }, [statusUser]);

  const handleInputChange = (e) => {
    const target = e.target;
    dispatch(handleValueChange({ name: target.name, value: target.value }));
    dispatch(validateInput(target.name));
    dispatch(validateForm(["name", "about"]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUxBtnTitle(`Saving...`));
    dispatch(disableButton());
    dispatch(editProfile(values));
  };

  return (
    <PopupWithForm
      isOpen={isEditProfilePopupOpen}
      title="Edit profile"
      onSubmit={handleSubmit}
      onValid={isFormValid}
    >
      <Input
        type="text"
        inputName="name"
        labelName="First and Last name"
        onChange={handleInputChange}
        value={values.name}
        error={errors.name}
      />
      <Input
        type="text"
        inputName="about"
        labelName="Profession"
        onChange={handleInputChange}
        value={values.about}
        error={errors.about}
      />
    </PopupWithForm>
  );
};

export default EditProfilePopup;
