import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeAllPopups, setUxBtnTitle } from "../../store/appSlice";
import { deleteCard } from "../../store/dataSlice";
import { disableButton } from "../../store/formSlice";
import { DELAY } from "../../utils/config";
import PopupWithForm from "./PopupWithForm";

const ConfirmDeletePopup = () => {
  const dispatch = useDispatch();
  const { isDelConfirmPopupOpen, selectedCard } = useSelector(
    (state) => state.app
  );
  const { statusData } = useSelector((state) => state.data);

  useEffect(() => {
    if (statusData !== "resolved") return;
    dispatch(closeAllPopups());
  }, [statusData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUxBtnTitle("Deleting..."));
    dispatch(disableButton());
    dispatch(deleteCard(selectedCard._id));
  };

  return (
    <PopupWithForm
      isOpen={isDelConfirmPopupOpen}
      title="Are you shure?"
      onSubmit={handleSubmit}
      onValid={true}
    />
  );
};

export default ConfirmDeletePopup;
