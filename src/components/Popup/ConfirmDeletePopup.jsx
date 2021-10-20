import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeAllPopups, setUxBtnTitle } from "../../store/appSlice";
import { deleteCard } from "../../store/dataSlice";
import { DELAY } from "../../utils/config";
import PopupWithForm from "./PopupWithForm";

const ConfirmDeletePopup = () => {
  const dispatch = useDispatch();
  const { isDelConfirmPopupOpen, selectedCard } = useSelector(
    (state) => state.app
  );
  const { status } = useSelector((state) => state.data);

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
    dispatch(setUxBtnTitle("Deleting..."));
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
