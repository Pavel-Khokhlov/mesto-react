import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { openEditProfilePopup } from "../../store/appSlice";
import Button from "../Button/Button";
import "./About.css";

const About = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);

  const handleEditProfile = () => {
    dispatch(openEditProfilePopup());
  };

  return (
    <div className="about">
      <div className="about__name">
        <h1 className="title title__name text__overflow text__color_white">{currentUser.name}</h1>
        <Button
          type="button"
          className="button button_background button__edit-profile"
          aria-label="кнопка редактировать профиль"
          onClick={handleEditProfile}
        />
      </div>
      <p className="paragraph paragraph__about text__overflow text__color_white">{currentUser.about}</p>
    </div>
  );
};

export default About;
