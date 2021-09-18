import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeAllPopups } from "../store/appSlice";
import { deleteCard } from "../store/dataSlice";
import PopupWithForm from "./PopupWithForm";

const ConfirmDeletePopup = ({ button }) => {
  const dispatch = useDispatch();
  const { isDelConfirmPopupOpen, selectedCard } = useSelector(
    (state) => state.app
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteCard(selectedCard._id))
    dispatch(closeAllPopups());
  };

  const handleClose = () => {
    dispatch(closeAllPopups());
  }

  return (
    <PopupWithForm
      isOpen={isDelConfirmPopupOpen}
      onClose={handleClose}
      name="del-place"
      title="Are you shure?"
      button={button}
      onSubmit={handleSubmit}
      onValid={true}
    />
  );
};

export default ConfirmDeletePopup;
