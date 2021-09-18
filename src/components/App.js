import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";

import scrollLock from "scroll-lock";
import { closeAllPopups } from "../store/appSlice";
import { ESC_CODE } from "../utils/config";
import { fetchUserInfo } from "../store/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const { isPopupOpen } = useSelector((state) => state.app);
  const { status, error } = useSelector((state) => state.data);
  // STATES
  const [uxSaveBtn, setUxSaveBtn] = useState("Save");
  const [uxCreateBtn, setUxCreateBtn] = useState("Create");
  const [uxDelBtn, setUxDelBtn] = useState("Yes!");

  // EFFECTS
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  const handleEsc = (e) => {
    if (e.keyCode === ESC_CODE) {
      dispatch(closeAllPopups());
    }
  };

  isPopupOpen
    ? window.addEventListener("keydown", handleEsc) ||
      scrollLock.disablePageScroll()
    : window.removeEventListener("keydown", handleEsc) ||
      scrollLock.enablePageScroll();

  /* UPDATE PROFILE WORKS
  const handleUpdateUser = (values) => {
    setUxSaveBtn("Saving...");
    api
      .patchUserInfo({ name: values.name, about: values.about })
      .then((res) => {
        //setCurrentUser(res);
      })
      .then(() => handleCloseAllPopups())
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
        //setCurrentUser(res);
      })
      .then(() => handleCloseAllPopups())
      .catch((res) => {
        console.log(`Ошибка обновления аватара: ${res.status}`);
      });
  };*/

  /* LIKE WORKS
  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((res) => {
        console.log(`Ошибка: ${res.status}`);
      });
  };*/

  /* DELETE WORKS
  const handleCardDelete = (card) => {
    setUxDelBtn("Deleting...");
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .then(() => handleCloseAllPopups())
      .catch((res) => {
        console.log(`Ошибка удаления карточки: ${res.status}`);
      });
  };

  const handleConfirmDelete = () => {
    handleCardDelete(cardForDelete);
    handleCloseAllPopups();
  };

  // ADD NEW CARD WORKS
  const handleAddPlaceSubmit = ({ name, link, fn }) => {
    setUxCreateBtn("Adding...");
    api
      .newPlace({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(() => handleCloseAllPopups())
      .catch((res) => {
        console.log(`Ошибка добавления карточки: ${res.status}`);
      });
  }; */

  /* CLOSE POPUPs
  const handleCloseAllPopups = () => {
    setUxSaveBtn("Save");
    setUxCreateBtn("Create");
    setUxDelBtn("Yes!");
  }; */

  return (
    <section>
      <Header />
      {status === "loading" && <h2>LOADING</h2>}
      {error && <h2>ERROR OCCURED - SERVER ERROR</h2>}
      <Main />
      <Footer />
      <EditAvatarPopup button={uxSaveBtn} />
      <EditProfilePopup button={uxSaveBtn} />
      <AddPlacePopup button={uxCreateBtn} />
      <ConfirmDeletePopup button={uxDelBtn} />
      <ImagePopup />
    </section>
  );
};

export default App;
