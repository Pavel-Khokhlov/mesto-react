import React, { useState, useEffect } from "react";
import Card from "./Card";
import api from "../utils/api";
import { CurrentUserContext } from '../context/CurrentUserContext';

const Main = (props) => {
  const [cards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    api.getPlaces().then((res) => {
      const cards = res.map((card) => {
        return {
          card,
        };
      });
      setCards(cards);
      console.log(cards);
    });
  }, []);

  return (
    <main className="main">
      {/* PROFILE */}
      <section className="profile">
        <div className="profile__avatar-area">
          <img src={currentUser.avatar} alt={currentUser.name} className="profile__avatar" />
          <button
            type="button"
            className="profile__avatar-btn"
            aria-label="Редактировать аватар"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__block-name">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="button profile__edit-btn"
              aria-label="кнопка редактировать профиль"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="button profile__add-btn"
          aria-label="кнопка добавить место"
          onClick={props.onAddPlace}
        />
      </section>
      {/* PLACES */}
      <ul className="places">
        {cards.map(({card}) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default Main;
