import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeAllPopups } from "../../store/appSlice";
import { ESC_CODE } from "../../utils/config";
import "./Popup.css";

const Popup = ({ isOpen, children }) => {
  const dispatch = useDispatch();

  const handleEsc = (e) => {
    if (e.keyCode === ESC_CODE) dispatch(closeAllPopups());
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
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
    }
  }, [isOpen]);

  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });

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
