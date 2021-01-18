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

  const [uxSaveBtn, setUxSaveBtn] = useState("Сохранить");
  const [uxCreateBtn, setUxCreateBtn] = useState("Создать");
  const [uxDelBtn, setUxDelBtn] = useState("Да");

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
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
    window.addEventListener("keydown", handleEsc);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
    window.addEventListener("keydown", handleEsc);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setTimeout(() => {
      setIsImagePopupOpen(true);
    }, 500);
    window.addEventListener("keydown", handleEsc);
  };

  const handleCardDeleteClick = (card) => {
    setIsDelConfirmPopupOpen(true);
    setCardForDelete(card);
    window.addEventListener("keydown", handleEsc);
  };

  // UPDATE PROFILE WORKS
  const handleUpdateUser = (name, description) => {
    setUxSaveBtn("Сохранение...");
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
  const handleUpdateAvatar = ({ link, fn }) => {
    setUxSaveBtn("Сохранение...");
    api
      .patchUserAvatar(link)
      .then((res) => {
        setCurrentUser(res);
      })
      .then(() => closeAllPopups())
      .then(() => fn)
      .catch((res) => {
        console.log(`Ошибка обновления аватара: ${res.status}`);
      });
  };

  // LIKE WORKS
  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((res) => {
        console.log(`Ошибка: ${res.status}`);
      });
  };

  // DELETE WORKS
  const handleCardDelete = (card) => {
    setUxDelBtn("Удаление...");
    api
      .deleteCard(card._id)
      .then((res) => {
        console.log(res);
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
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
    setUxCreateBtn("Добавление...");
    api
      .newPlace({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(() => closeAllPopups())
      .then(() => fn)
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
    setUxSaveBtn("Сохранить");
    setUxCreateBtn("Создать");
    setUxDelBtn("Да");
    window.removeEventListener("keydown", handleEsc);
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
