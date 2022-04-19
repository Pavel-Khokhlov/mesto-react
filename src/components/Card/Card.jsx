import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openZoomImagePopup, openDelConfirmPopup } from "../../store/appSlice";
import { dislikeCard, likeCard, setSelectedCard } from "../../store/dataSlice";
import Button from "../Button/Button";

import "./Card.css";

const Card = ({ card }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);

  // SET DELETE BTN TO MY CARD
  const isOwn = card.owner._id === currentUser._id;

  const deleteButtonClassName = `button button__delete button_background ${
    isOwn ? "" : "button__delete_inactive"
  }`;

  // SET LIKE TO MY CARD
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const likeButtonClassName = `button button_background button__like ${
    isLiked ? "button__like_active" : "button__like_inactive"
  }`;

  const likeCountColorClassName = `paragraph paragraph__card ${
    isLiked ? "text__color_red" : "text__color_black"
  }`;

  const handleCardClick = () => {
    dispatch(setSelectedCard(card));
    dispatch(openZoomImagePopup());
  };

  const handleLikeClick = () => {
    isLiked ? dispatch(dislikeCard(card._id)) : dispatch(likeCard(card._id));
  };

  const handleDeleteClick = () => {
    dispatch(openDelConfirmPopup(card));
  };

  return (
    <li className="card">
      <Button
        type="button"
        className={deleteButtonClassName}
        aria-label="кнопка удалить место"
        onClick={handleDeleteClick}
      />
      <Button
        type="button"
        className="button button__image"
        aria-label="кнопка увеличить изображение"
      >
        <img
          src={card.link}
          alt={card.name}
          className="card__image"
          onClick={handleCardClick}
        />
      </Button>
      <div className="card__info">
        <h2 className="title title__card text__overflow">{card.name}</h2>
        <div className="card__like">
          <Button
            type="button"
            className={likeButtonClassName}
            aria-label="кнопка поставить лайк"
            onClick={handleLikeClick}
          />
          <p className={likeCountColorClassName}>{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
