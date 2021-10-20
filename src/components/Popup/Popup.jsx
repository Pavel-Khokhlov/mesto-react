import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAllPopups } from '../../store/appSlice';
import { DELAY } from '../../utils/config';
import "./Popup.css";

const Popup = ({ isOpen, children }) => {
  const dispatch = useDispatch();

  const popupClassName = `popup ${
    isOpen ? "popup_active" : "popup_inactive"
  }`;

  const handleClose = () => {
    dispatch(closeAllPopups());
  };

  return (
    <section className={popupClassName} onClick={handleClose}>
      {children}
    </section>
  );
};

export default Popup;
