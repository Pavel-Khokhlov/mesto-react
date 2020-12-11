import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../pages/index.css";

function App() {
  return (
    <div>
      {/* ROOT */}
      <body className="root">
        {/* HEADER */}
        <Header />
        {/* CONTENT */}
        <Main />
        {/* FOOTER */}
        <Footer />
        {/* POPUP EDIT PROFILE */}
        <section className="popup">
          <form
            className="popup__container popup_edit-profile"
            method="post"
            noValidate
          >
            <button
              type="button"
              className="button popup__close-btn"
              aria-label="Вернуться на страницу"
            />
            <h2 className="popup__title">Редактировать профиль</h2>
            <input
              type="text"
              id="fullName"
              className="popup__input popup__input_name-profile"
              placeholder="Имя Фамилия"
              autoComplete="off"
              minLength={2}
              maxLength={40}
              defaultValue
              required
            />
            <span id="fullName-error" className="popup__input-error" />
            <input
              type="text"
              id="jobPosition"
              className="popup__input popup__input_job-profile"
              placeholder="Профессия или должность"
              autoComplete="off"
              minLength={2}
              maxLength={200}
              defaultValue
              required
            />
            <span id="jobPosition-error" className="popup__input-error" />
            <button
              type="submit"
              className="popup__save-btn"
              aria-label="Сохранить новый профиль"
            >
              Сохранить
            </button>
          </form>
        </section>
        {/* POPUP UDATE AVATAR */}
        <section className="popup">
          <form
            className="popup__container popup_edit-avatar"
            method="post"
            noValidate
          >
            <button
              type="button"
              className="button popup__close-btn"
              aria-label="Вернуться на страницу"
            />
            <h2 className="popup__title">Обновить аватар</h2>
            <input
              type="url"
              id="avatarLink"
              name="link"
              className="popup__input popup__input_avatar-link"
              placeholder="Ссылка на аватар"
              autoComplete="off"
              required
            />
            <span id="avatarLink-error" className="popup__input-error" />
            <button
              type="submit"
              className="popup__save-btn"
              aria-label="Сохранить новый аватар"
            >
              Сохранить
            </button>
          </form>
        </section>
        {/* POPUP ADD PLACE */}
        <section className="popup">
          <form className="popup__container popup_add-place" method="post">
            <button
              type="button"
              className="button popup__close-btn"
              aria-label="Вернуться на страницу"
            />
            <h2 className="popup__title">Новое место</h2>
            <input
              type="text"
              id="placeName"
              name="name"
              className="popup__input popup__input_name-place"
              placeholder="Название"
              autoComplete="off"
              minLength={2}
              maxLength={30}
              required
            />
            <span id="placeName-error" className="popup__input-error" />
            <input
              type="url"
              id="placeLink"
              name="link"
              className="popup__input popup__input_link-place"
              placeholder="Ссылка на картинку"
              autoComplete="off"
              required
            />
            <span id="placeLink-error" className="popup__input-error" />
            <button
              type="submit"
              className="popup__save-btn"
              aria-label="Добавить новое место"
            >
              Создать
            </button>
          </form>
        </section>
        {/* POPUP ZOOM PHOTO */}
        <section className="popup popup-zoom">
          <figure className="popup-zoom__container">
            <button
              type="button"
              className="button popup__close-btn"
              aria-label="Вернуться на страницу"
            />
            <img src="#" alt="name" className="popup-zoom__image" />
            <figcaption className="popup-zoom__caption">name</figcaption>
          </figure>
        </section>
        {/* POPUP DELETE PLACE */}
        <section className="popup">
          <form className="popup__container popup_del-place">
            <button
              type="button"
              className="button popup__close-btn"
              aria-label="Вернуться на страницу"
            />
            <h2 className="popup__title">Вы уверенны?</h2>
            <button
              type="button"
              className="popup__save-btn"
              aria-label="Удалить место"
            >
              Да
            </button>
          </form>
        </section>
        {/* PLACE TEMPLATE */}
        <template className="place-template" />
      </body>
    </div>
  );
}

export default App;
