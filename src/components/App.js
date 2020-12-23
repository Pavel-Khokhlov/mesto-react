import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDelConfirmPopupOpen, setIsDelConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (cardLink, cardTitle) => {
    console.log(cardLink, cardTitle);
    setSelectedCard({ cardLink, cardTitle });
  };

  return (
    <div>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={() => setIsEditAvatarPopupOpen(false)}
        name={`edit-avatar`}
        title={`Обновить аватар`}
        button={`Сохранить`}
      >
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
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={() => setIsEditProfilePopupOpen(false)}
        name={`edit-profile`}
        title={`Редактировать профиль`}
        button={`Сохранить`}
      >
        <input
          type="text"
          id="fullName"
          className="popup__input popup__input_name-profile"
          placeholder="Имя Фамилия"
          autoComplete="off"
          minLength={2}
          maxLength={40}
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
          required
        />
        <span id="jobPosition-error" className="popup__input-error" />
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={() => setIsAddPlacePopupOpen(false)}
        name={`add-place`}
        title={`Новое место`}
        button={`Добавить`}
      >
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
      </PopupWithForm>
      <PopupWithForm
        isOpen={isDelConfirmPopupOpen}
        onClose={() => setIsDelConfirmPopupOpen(false)}
        name={`del-place`}
        title={`Вы уверенны`}
        button={`Да`}
      />
      <ImagePopup card={selectedCard} onClose={() => setSelectedCard(false)} />
    </div>
  );
};

export default App;
