import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PopupWithForm from "./PopupWithForm";
import Input from "../Input/Input.jsx";
import { DELAY } from "../../utils/config.js";
import { closeAllPopups, setUxBtnTitle } from "../../store/appSlice.js";
import { editAvatar } from "../../store/userSlice.js";
import { disableButton, handleValueChange, resetForm, validateForm, validateInput } from "../../store/formSlice.js";

const EditAvatarPopup = () => {
  const dispatch = useDispatch();
  const { isEditAvatarPopupOpen } = useSelector((state) => state.app);
  const { values, errors, isFormValid } = useSelector((state) => state.form);

  const { statusUser } = useSelector((state) => state.users);

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetForm());
    }, DELAY);
  }, [isEditAvatarPopupOpen]);

  useEffect(() => {
    if (statusUser !== "resolved") return;
    dispatch(closeAllPopups());
  }, [statusUser]);

  const handleInputChange = (e) => {
    const target = e.target;
    dispatch(handleValueChange({ name: target.name, value: target.value }));
    dispatch(validateInput(target.name));
    dispatch(validateForm(["link"]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUxBtnTitle("Saving..."));
    dispatch(disableButton());
    dispatch(editAvatar(values));
  };

  return (
    <PopupWithForm
      isOpen={isEditAvatarPopupOpen}
      title="Update avatar"
      onSubmit={handleSubmit}
      onValid={isFormValid}
    >
      <Input
        type="url"
        inputName="link"
        labelName="Avatar's link"
        onChange={handleInputChange}
        value={values.link}
        error={errors.link}
      />
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
