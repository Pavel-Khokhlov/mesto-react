import React, { useState, useEffect } from "react";
import Card from "./Card";
import api from "../utils/api";

import "../pages/index.css";

const Main = (props) => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  {
    /* API GET USER INFO */
  }
  useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  });

  {
    /* API GET CARDS */
  }
  useEffect(() => {
    api.getPlaces().then((res) => {
      console.log(res);
      const cards = res.map((item) => {
        return {
          link: item.link,
          title: item.name,
          cardId: item._id,
          ownerId: item.owner._id,
          ownerAva: item.owner.avatar,
          ownerName: item.owner.name,
          likes: item.likes,
          countLikes: item.likes.length,
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
          <img src={userAvatar} alt={userName} className="profile__avatar" />
          <button
            type="button"
            className="profile__avatar-btn"
            aria-label="Редактировать аватар"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__block-name">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="button profile__edit-btn"
              aria-label="кнопка редактировать профиль"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__job">{userDescription}</p>
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
        {cards.map((card) => {
          return (
            <Card
              link={card.link}
              title={card.title}
              countLikes={card.countLikes}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default Main;
