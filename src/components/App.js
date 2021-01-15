import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../context/CurrentUserContext";
import EscapeOutside from "react-escape-outside";

const App = () => {
  const catchError = (res) => {
    alert(`Всё идёт не по плану. ${res.status}`);
  };

  // STATES
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDelConfirmPopupOpen, setIsDelConfirmPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [cardForDelete, setCardForDelete] = useState("");

  // EFFECTS
  useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    });
  }, []);

  useEffect(() => {
    api.getPlaces().then((res) => {
      setCards(res);
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
    setTimeout(() => {
      setIsImagePopupOpen(true);
    }, 500);
  };

  const handleCardDeleteClick = (card) => {
    setIsDelConfirmPopupOpen(true);
    setCardForDelete(card);
  };

  // UPDATE PROFILE WORKS
  const handleUpdateUser = (name, description) => {
    api
      .patchUserInfo({ name: name, about: description })
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(catchError);
    closeAllPopups();
  };

  // UPDATE AVATAR WORKS
  const handleUpdateAvatar = ({ avatar }) => {
    api
      .patchUserAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(catchError);
    closeAllPopups();
  };

  // LIKE WORKS
  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        // Обновляем стейт
        setCards(newCards);
      })
      .catch((res) => {
        console.log(`Ошибка: ${res.status}`);
      });
  };

  // DELETE WORKS
  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then((res) => {
        console.log(res);
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((res) => {
        console.log(`Ошибка: ${res.status}`);
      });
  };

  const handleConfirmDelete = () => {
    handleCardDelete(cardForDelete);
    closeAllPopups();
  };

  // ADD NEW CARD WORKS
  const handleAddPlaceSubmit = (name, link) => {
    api
      .newPlace(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((res) => {
        console.log(`Ошибка: ${res.status}`);
      });
    closeAllPopups();
  };

  // CLOSE POPUPs BY ESC
  const handleEscapeOutside = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDelConfirmPopupOpen(false);
    setIsImagePopupOpen(false);
  };

  // CLOSE POPUPs
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDelConfirmPopupOpen(false);
    setIsImagePopupOpen(false);
    setTimeout(() => {
      setSelectedCard(false);
    }, 800);
    setCardForDelete("");
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
        onCardDelete={handleCardDeleteClick}
      />
      <Footer />
      <EscapeOutside onEscapeOutside={handleEscapeOutside}>
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <ConfirmDeletePopup
          isOpen={isDelConfirmPopupOpen}
          onClose={closeAllPopups}
          onCardDelete={handleCardDelete}
          onConfirmDelete={handleConfirmDelete}
        />
        <ImagePopup
          isOpen={isImagePopupOpen}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </EscapeOutside>
    </CurrentUserContext.Provider>
  );
};

export default App;
