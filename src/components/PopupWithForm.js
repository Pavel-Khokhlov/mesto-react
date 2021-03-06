import React from "react";

const PopupWithForm = (props) => {
  const popupOpenClassName = `popup ${props.isOpen ? "popup_opened" : ""}`;

  return (
    <section className={popupOpenClassName} onClick={props.onClose}>
      <form
        className="popup__container"
        method="post"
        noValidate
        onClick={(e) => e.stopPropagation()}
        onSubmit={props.onSubmit}
      >
        <button
          type="button"
          className="button popup__close-btn"
          aria-label="Вернуться на страницу"
          onClick={props.onClose}
        />
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button
          type="submit"
          className={`popup__save-btn ${
            props.onValid ? "" : "popup__save-btn_inactive"
          }`}
          aria-label="Сохранить новый профиль"
          disabled={!props.onValid}
        >
          {props.button}
        </button>
      </form>
    </section>
  );
};

export default PopupWithForm;
