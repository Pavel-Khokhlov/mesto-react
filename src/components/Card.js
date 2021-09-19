import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openZoomImagePopup, openDelConfirmPopup } from "../store/appSlice";
import { dislikeCard, likeCard } from "../store/dataSlice";

const Card = ({ card }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);

  // SET DELETE BTN TO MY CARD
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `button place__del-btn ${
    isOwn ? "" : "place__del-btn_disable"
  }`;

  // SET LIKE TO MY CARD
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `button place__like-btn ${
    isLiked ? "place__like-btn_active" : ""
  }`;
  const cardLikeCountColorClassName = `paragraph ${
    isLiked ? "paragraph_red" : ""
  }`;

  const handleCardClick = () => {
    dispatch(openZoomImagePopup(card));
  };

  const handleLikeClick = () => {
    isLiked ? dispatch(dislikeCard(card._id)) : dispatch(likeCard(card._id));
  };

  const handleDeleteClick = () => {
    dispatch(openDelConfirmPopup(card));
  };

  return (
    <li className="place">
      <button
        type="button"
        className={cardDeleteButtonClassName}
        aria-label="удалить место"
        onClick={handleDeleteClick}
      />
      <button type="button" className="button place__ratio-box">
        <img
          src={card.link}
          alt={card.name}
          className="place__image"
          onClick={handleCardClick}
        />
      </button>
      <div className="place__info">
        <h2 className="place__title">{card.name}</h2>
        <div className="place__like-area">
          <button
            type="button"
            className={cardLikeButtonClassName}
            aria-label="поставить лайк"
            onClick={handleLikeClick}
          />
          <p className={cardLikeCountColorClassName}>{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
