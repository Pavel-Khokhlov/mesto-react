import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
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
