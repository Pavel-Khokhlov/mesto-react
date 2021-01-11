import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import api from "../utils/api";
import { CurrentUserContext } from "../context/CurrentUserContext";

const App = () => {
  const catchError = (res) => {
    alert(`Всё идёт не по плану. ${res.status}`);
  };

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDelConfirmPopupOpen, setIsDelConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [uxSaveBtn, setUxSaveBtn] = useState("Сохранить");
  const [uxAddBtn, setUxAddBtn] = useState("Добавить");

  useEffect(() => {
    api.getUserInfo().then((currentUser) => {
      setCurrentUser(currentUser);
    });
  }, []);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard({ link: card.link, title: card.name });
  };

  const handleUpdateUser = ({ name, about }) => {
    setUxSaveBtn("Сохранение...");
    api.patchUserInfo(name, about).catch(catchError);
    closeAllPopups();
  };

  const handleUpdateAvatar = ({ avatar }) => {
    setUxSaveBtn("Сохранение...");
    api.patchUserAvatar(avatar).catch(catchError);
    closeAllPopups();
  };

  // FOR MAIN
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getPlaces().then((res) => {
      const cards = res.map((card) => {
        return {
          card,
        };
      });
      setCards(cards);
    });
  });

  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      // Обновляем стейт
      setCards(newCards);
    });
  };

  const handleCardDelete = (card) => {
    api.deleteCard(card._id).then((newCard) => {
      const newCards = cards.filter((card) => card._id === !newCard);
      setCards(newCards);
    });
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
    setIsDelConfirmPopupOpen(false);
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    });
    setUxSaveBtn("Сохранить");
    setUxAddBtn("Добавить");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        cards={cards}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        button={uxSaveBtn}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        button={uxSaveBtn}
      />
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name={`add-place`}
        title={`Новое место`}
        button={uxAddBtn}
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
        onClose={closeAllPopups}
        name={`del-place`}
        title={`Вы уверенны`}
        button={`Да`}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
};

export default App;
