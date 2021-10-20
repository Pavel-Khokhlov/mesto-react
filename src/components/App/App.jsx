import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ImagePopup from "../Popup/ImagePopup.jsx";
import EditProfilePopup from "../Popup/EditProfilePopup.jsx";
import EditAvatarPopup from "../Popup/EditAvatarPopup.jsx";
import AddPlacePopup from "../Popup/AddPlacePopup.jsx";
import ConfirmDeletePopup from "../Popup/ConfirmDeletePopup.jsx";
import scrollLock from "scroll-lock";
import { closeAllPopups } from "../../store/appSlice";
import { ESC_CODE } from "../../utils/config";
import { getUserInfo } from "../../store/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const { isPopupOpen } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(getUserInfo());
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

  return (
    <>
      <Header />
      <Main />
      <Footer />
      <EditAvatarPopup />
      <EditProfilePopup />
      <AddPlacePopup />
      <ConfirmDeletePopup />
      <ImagePopup />
    </>
  );
};

export default App;
