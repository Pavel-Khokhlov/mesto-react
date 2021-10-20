import React from "react";
import { useDispatch } from "react-redux";
import { openAddPlacePopup } from "../../store/appSlice";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import About from "../About/About";
import CardsList from "../CardsList/CardsList";

import "./Main.css";

const Main = () => {
  const dispatch = useDispatch();

  const handleAddPlace = () => {
    dispatch(openAddPlacePopup());
  };

  return (
    <main className="main">
      {/* PROFILE */}
      <section className="main__profile">
        <Avatar />
        <About />
        <Button
          type="button"
          className="button button_background button__add-place"
          aria-label="кнопка добавить место"
          onClick={handleAddPlace}
        />
      </section>
      {/* PLACES */}
      <CardsList />
    </main>
  );
};

export default Main;
