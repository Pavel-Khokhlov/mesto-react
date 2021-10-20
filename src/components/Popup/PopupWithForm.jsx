import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAllPopups } from "../../store/appSlice";
import { DELAY } from "../../utils/config";
import Button from "../Button/Button";
import Popup from "./Popup";

const PopupWithForm = ({ isOpen, title, children, onSubmit, onValid, resetForm }) => {
  const dispatch = useDispatch();
  const { uxBtnTitle } = useSelector(
    (state) => state.app
  );

  const containerClassName = `popup__container popup__container_form ${isOpen ? "popup__container_active" : ""}`;

  const buttonSubmitClassName = `button button__submit ${
    onValid ? "button__submit_active" : "button__submit_inactive"
  }`

  const handleClose = () => {
    dispatch(closeAllPopups());
    setTimeout(() => {
      resetForm();
    }, DELAY);
  };

  return (
    <Popup isOpen={isOpen} resetForm={resetForm}>
      <form
        className={containerClassName}
        onClick={(e) => e.stopPropagation()}
        onSubmit={onSubmit}
      >
        <Button
          type="button"
          className="button button_background button__close-popup"
          aria-label="Вернуться на страницу"
          onClick={handleClose}
        />
        <h2 className="popup__title">{title}</h2>
        {children}
        <Button
          type="submit"
          className={buttonSubmitClassName}
          aria-label="Сохранить новый профиль"
          disabled={!onValid}
        >
          {uxBtnTitle}
        </Button>
      </form>
    </Popup>
  );
};

export default PopupWithForm;
