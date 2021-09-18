import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import {
  openAddPlacePopup,
  openEditAvatarPopup,
  openEditProfilePopup,
} from "../store/appSlice";
import { fetchCards } from "../store/dataSlice";

const Main = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);
  const { cards } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const handleEditAvatar = () => {
    dispatch(openEditAvatarPopup());
  };

  const handleEditProfile = () => {
    dispatch(openEditProfilePopup());
  };

  const handleAddPlace = () => {
    dispatch(openAddPlacePopup());
  };

  return (
    <main className="main">
      {/* PROFILE */}
      <section className="profile">
        <div className="profile__avatar-area">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="profile__avatar"
          />
          <button
            type="button"
            className="profile__avatar-btn"
            aria-label="Редактировать аватар"
            onClick={handleEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__block-name">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="button profile__edit-btn"
              aria-label="кнопка редактировать профиль"
              onClick={handleEditProfile}
            />
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="button profile__add-btn"
          aria-label="кнопка добавить место"
          onClick={handleAddPlace}
        />
      </section>
      {/* PLACES */}
      <ul className="places">
        {cards.map((i) => {
          return <Card key={i._id} card={i} />;
        })}
      </ul>
    </main>
  );
};

export default Main;
