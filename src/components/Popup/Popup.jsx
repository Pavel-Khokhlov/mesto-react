import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAllPopups } from "../../store/appSlice";
import { DELAY, ESC_CODE } from "../../utils/config";
import "./Popup.css";

const Popup = ({ isOpen, children }) => {
  const dispatch = useDispatch();

  const handleEsc = (e) =>
    e.keyCode === ESC_CODE ? dispatch(closeAllPopups()) : "";

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      // When the modal is shown, we want a fixed body
      document.querySelector('.popup').classList.add('show')
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    } else {
      window.removeEventListener("keydown", handleEsc);
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      document.querySelector('.popup').classList.remove('show');
    }
  }, []);

  const popupClassName = `popup ${isOpen ? "_active" : ""}`;

  const handleCloseOverlay = () => {
    dispatch(closeAllPopups());
  };

  return (
    <section className={popupClassName} onClick={handleCloseOverlay}>
      {children}
    </section>
  );
};

export default Popup;
