import React from "react";

const PopupWithForm = ({ isOpen, title, button, children, onClose, onSubmit, onValid }) => {

  const popupOpenClassName = `popup ${isOpen ? "popup_opened" : ""}`;

  return (
    <section className={popupOpenClassName} onClick={onClose}>
      <form
        className="popup__container"
        method="post"
        noValidate
        onClick={(e) => e.stopPropagation()}
        onSubmit={onSubmit}
      >
        <button
          type="button"
          className="button popup__close-btn"
          aria-label="Вернуться на страницу"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        {children}
        <button
          type="submit"
          className={`popup__save-btn ${
            onValid ? "" : "popup__save-btn_inactive"
          }`}
          aria-label="Сохранить новый профиль"
          disabled={!onValid}
        >
          {button}
        </button>
      </form>
    </section>
  );
};

export default PopupWithForm;
