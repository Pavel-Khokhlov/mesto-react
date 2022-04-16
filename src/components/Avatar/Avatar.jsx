import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openEditAvatarPopup } from "../../store/appSlice";
import Button from "../Button/Button";
import "./Avatar.css";

const Avatar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);

  const handleEditAvatar = () => {
    dispatch(openEditAvatarPopup());
  };

  return (
    <Button
      type="button"
      className="button__edit-avatar"
      aria-label="кнопка редактировать аватар"
      onClick={handleEditAvatar}
    >
      <img
        src={currentUser.avatar}
        alt={currentUser.name}
        className="avatar__image"
      />
    </Button>
  );
};

export default Avatar;
