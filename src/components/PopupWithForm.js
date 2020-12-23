import React from "react";

const PopupWithForm = (props) => {
  return (
    <section
      className={props.isOpen ? "popup popup_opened" : "popup"}
      onClick={props.onClose}
    >
      <form
        className={`popup__container popup_${props.name}`}
        method="post"
        noValidate
        onClick={(e) => e.stopPropagation()}
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
          className="popup__save-btn"
          aria-label="Сохранить новый профиль"
        >
          {props.button}
        </button>
      </form>
    </section>
  );
};

export default PopupWithForm;
