import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";

const EditProfilePopup = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const [profile, setProfile] = useState({
    name: "",
    nameErrorMessage: "",
    isNameValid: true,
    description: "",
    descriptionErrorMessage: "",
    isDescriptionValid: true,
    formValid: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setProfile({
        name: currentUser.name,
        nameErrorMessage: "",
        isNameValid: true,
        description: currentUser.about,
        descriptionErrorMessage: "",
        isDescriptionValid: true,
        formValid: false,
      });
    }, 500);
  }, [currentUser, props.isOpen]);

  const handleChangeName = (e) => {
    setProfile((state) => ({ ...state, name: e.target.value }));
    validateName();
  };

  const handleChangeDescription = (e) => {
    setProfile((state) => ({ ...state, description: e.target.value }));
    validateDescription();
  };

  const validateName = () => {
    if (profile.name.length + 1 <= 3) {
      setProfile((state) => ({
        ...state,
        nameErrorMessage: "The name is too short",
        isNameValid: false,
      }));
    } else if (profile.name.length > 30) {
      setProfile((state) => ({
        ...state,
        nameErrorMessage: "The name is too long",
        isNameValid: false,
      }));
    } else {
      setProfile((state) => ({
        ...state,
        nameErrorMessage: "",
        isNameValid: true,
      }));
    }
    validateForm();
  };

  const validateDescription = () => {
    console.log(profile.description.length);
    validateForm();
  };

  const validateForm = () => {
    console.log(profile.isNameValid, profile.isDescriptionValid);
    if (profile.isNameValid && profile.isDescriptionValid) {
      setProfile((state) => ({
        ...state,
        formValid: true,
      }));
    } else {
      setProfile((state) => ({
        ...state,
        formValid: false,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateUser(profile.name, profile.description);
  };

  const handleClose = () => {
    props.onClose();
  };

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={handleClose}
      title={`Edit profile`}
      button={props.button}
      onSubmit={handleSubmit}
      onValid={profile.formValid}
    >
      <input
        type="text"
        className={`popup__input ${
          profile.isNameValid ? "" : "popup__input_invalid"
        }`}
        placeholder="First and second name"
        value={profile.name || ""}
        onChange={handleChangeName}
      />
      <span
        id="fullName-error"
        className={`popup__input-error ${
          profile.isNameValid ? "" : "popup__input-error_active"
        }`}
      >
        {profile.nameErrorMessage}
      </span>
      <input
        type="text"
        className="popup__input"
        placeholder="Profession"
        value={profile.description || ""}
        onChange={handleChangeDescription}
      />
      <span id="jobPosition-error" className="popup__input-error">
        {profile.descriptionErrorMessage}
      </span>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
