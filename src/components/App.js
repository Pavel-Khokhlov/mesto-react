import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import "../pages/index.css";
import PopupWithForm from "./PopupWithForm";

const App = () => {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isDelConfirmPopupOpen, setDelConfirmPopupOpen] = useState(false);

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  return (
    <div>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={() => setEditAvatarPopupOpen(false)}
        name={`edit-avatar`}
        title={`Обновить аватар`}
        button={`Сохранить`}
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={() => setEditProfilePopupOpen(false)}
        name={`edit-profile`}
        title={`Редактировать профиль`}
        button={`Сохранить`}
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={() => setAddPlacePopupOpen(false)}
        name={`add-place`}
        title={`Новое место`}
        button={`Добавить`}
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        isOpen={isDelConfirmPopupOpen}
        onClose={() => setDelConfirmPopupOpen(false)}
        name={`del-place`}
        title={`Вы уверенны`}
        button={`Да`}
      />
      <ImagePopup />
    </div>
  );
};

export default App;
