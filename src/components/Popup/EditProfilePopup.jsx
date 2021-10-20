import React, { useEffect } from "react";
import { useFormWithValidation } from "../Hooks/useForm.jsx";
import { useSelector, useDispatch } from "react-redux";

import PopupWithForm from "./PopupWithForm";
import Input from "../Input/Input.jsx";
import { DELAY } from "../../utils/config.js";
import { editProfile } from "../../store/userSlice.js";
import { closeAllPopups, setUxBtnTitle } from "../../store/appSlice.js";

const EditProfilePopup = () => {
  const dispatch = useDispatch();
  const { values, errors, isValid, handleChange, resetFormCurrentUser } =
    useFormWithValidation();
  const { isEditProfilePopupOpen } = useSelector((state) => state.app);
  const { status } = useSelector((state) => state.users);

  useEffect(() => {
    if (isEditProfilePopupOpen === true) resetFormCurrentUser();
    setTimeout(() => {
      resetFormCurrentUser();
    }, DELAY);
  }, [isEditProfilePopupOpen]);

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
    dispatch(setUxBtnTitle(`Saving...`));
    dispatch(editProfile(values));
  };

  return (
    <PopupWithForm
      isOpen={isEditProfilePopupOpen}
      title="Edit profile"
      resetForm={resetFormCurrentUser}
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
