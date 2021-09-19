import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeAllPopups, resetUxButtons, setUxDeleteBtn } from "../store/appSlice";
import { deleteCard } from "../store/dataSlice";
import { DELAY } from "../utils/config";
import PopupWithForm from "./PopupWithForm";

const ConfirmDeletePopup = () => {
  const dispatch = useDispatch();
  const { isDelConfirmPopupOpen, selectedCard, uxDeleteBtn } = useSelector(
    (state) => state.app
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUxDeleteBtn());
    dispatch(deleteCard(selectedCard._id))
    handleClose();
  };

  const handleClose = () => {
    dispatch(closeAllPopups());
    setTimeout(() => {
      dispatch(resetUxButtons());
    }, DELAY);
  }

  return (
    <PopupWithForm
      isOpen={isDelConfirmPopupOpen}
      onClose={handleClose}
      name="del-place"
      title="Are you shure?"
      button={uxDeleteBtn}
      onSubmit={handleSubmit}
      onValid={true}
    />
  );
};

export default ConfirmDeletePopup;
