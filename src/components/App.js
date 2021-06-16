import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from './EditAvatarPopup';
//import EditAvatarUseRef from "./EditAvatarUseRef";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../context/CurrentUserContext";

import scrollLock from 'scroll-lock';

const App = () => {
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

  const [uxSaveBtn, setUxSaveBtn] = useState("Save");
  const [uxCreateBtn, setUxCreateBtn] = useState("Create");
  const [uxDelBtn, setUxDelBtn] = useState("Yes!");

  // EFFECTS
  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((res) => {
        console.log(`Ошибка, получения данных пользователя: ${res.status}`);
      });
  }, []);

  useEffect(() => {
    api
      .getPlaces()
      .then((res) => {
        setCards(res);
      })
      .catch((res) => {
        console.log(`Ошибка загрузки карточек с сервера: ${res.status}`);
      });
  }, []);

  const handleEsc = (e) => {
    if (e.keyCode === 27) {
      closeAllPopups();
    }
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
    window.addEventListener("keydown", handleEsc);
    scrollLock.disablePageScroll();
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
    window.addEventListener("keydown", handleEsc);
    scrollLock.disablePageScroll();
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
    window.addEventListener("keydown", handleEsc);
    scrollLock.disablePageScroll();
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setTimeout(() => {
      setIsImagePopupOpen(true);
    }, 500);
    window.addEventListener("keydown", handleEsc);
    scrollLock.disablePageScroll();
  };

  const handleCardDeleteClick = (card) => {
    setIsDelConfirmPopupOpen(true);
    setCardForDelete(card);
    window.addEventListener("keydown", handleEsc);
    scrollLock.disablePageScroll();
  };

  // UPDATE PROFILE WORKS
  const handleUpdateUser = (name, description) => {
    setUxSaveBtn("Saving...");
    api
      .patchUserInfo({ name: name, about: description })
      .then((res) => {
        setCurrentUser(res);
      })
      .then(() => closeAllPopups())
      .catch((res) => {
        console.log(`Ошибка обновления профиля: ${res.status}`);
      });
  };

  // UPDATE AVATAR WORKS
  const handleUpdateAvatar = ({ link }) => {
    setUxSaveBtn("Saving...");
    api
      .patchUserAvatar(link)
      .then((res) => {
        setCurrentUser(res);
      })
      .then(() => closeAllPopups())
      .catch((res) => {
        console.log(`Ошибка обновления аватара: ${res.status}`);
      });
  };

  // LIKE WORKS
  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((res) => {
        console.log(`Ошибка: ${res.status}`);
      });
  };

  // DELETE WORKS
  const handleCardDelete = (card) => {
    setUxDelBtn("Deleting...");
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .then(() => closeAllPopups())
      .catch((res) => {
        console.log(`Ошибка удаления карточки: ${res.status}`);
      });
  };

  const handleConfirmDelete = () => {
    handleCardDelete(cardForDelete);
    closeAllPopups();
  };

  // ADD NEW CARD WORKS
  const handleAddPlaceSubmit = ({ name, link, fn }) => {
    setUxCreateBtn("Adding...");
    api
      .newPlace({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(() => closeAllPopups())
      .then(() => fn())
      .catch((res) => {
        console.log(`Ошибка добавления карточки: ${res.status}`);
      });
  };

  // CLOSE POPUPs
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDelConfirmPopupOpen(false);
    setIsImagePopupOpen(false);
    setCardForDelete("");
    setUxSaveBtn("Save");
    setUxCreateBtn("Create");
    setUxDelBtn("Yes!");
    window.removeEventListener("keydown", handleEsc);
    scrollLock.enablePageScroll();
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
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        button={uxSaveBtn}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        button={uxSaveBtn}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        button={uxCreateBtn}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />
      <ConfirmDeletePopup
        isOpen={isDelConfirmPopupOpen}
        button={uxDelBtn}
        onClose={closeAllPopups}
        onCardDelete={handleCardDelete}
        onConfirmDelete={handleConfirmDelete}
      />
      <ImagePopup
        isOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
};

export default App;
