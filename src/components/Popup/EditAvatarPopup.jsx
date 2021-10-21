import React, { useEffect } from "react";
import { useFormWithValidation } from "../Hooks/useForm.jsx";
import { useSelector, useDispatch } from "react-redux";
import PopupWithForm from "./PopupWithForm";
import Input from "../Input/Input.jsx";
import { DELAY } from "../../utils/config.js";
import { closeAllPopups, setUxBtnTitle } from "../../store/appSlice.js";
import { editAvatar } from "../../store/userSlice.js";

const EditAvatarPopup = () => {
  const dispatch = useDispatch();
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();
  const { isEditAvatarPopupOpen } = useSelector((state) => state.app);

  const { status } = useSelector((state) => state.users);

  useEffect(() => {
    setTimeout(() => {
      resetForm();
    }, DELAY);
  }, [isEditAvatarPopupOpen]);

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
    dispatch(setUxBtnTitle("Saving..."));
    dispatch(editAvatar(values));
  };

  return (
    <PopupWithForm
      isOpen={isEditAvatarPopupOpen}
      title="Update avatar"
      formReset={resetForm}
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
