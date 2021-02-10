import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

const Card = (props) => {
  const handleCardClick = () => {
    props.onCardClick(props.card);
  };

  const handleLikeClick = () => {
    props.onCardLike(props.card);
  };

  const handleDeleteClick = () => {
    props.onCardDelete(props.card);
  };

  const currentUser = React.useContext(CurrentUserContext);
  
  // SET DELETE BTN TO MY CARD
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `button place__del-btn ${
    isOwn ? "" : "place__del-btn_disable"
  }`;

  // SET LIKE TO MY CARD
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `button place__like-btn ${
    isLiked ? "place__like-btn_active" : ""
  }`;
  const cardLikeCountColorClassName = `paragraph ${isLiked ? "paragraph_red" : ""}`

  return (
    <li className="place">
      <button
        type="button"
        className={cardDeleteButtonClassName}
        aria-label="удалить место"
        onClick={handleDeleteClick}
      />
      <button type="button" className="button place__img-btn">
        <img
          src={props.card.link}
          alt={props.card.name}
          className="place__image"
          onClick={handleCardClick}
        />
      </button>
      <div className="place__info">
        <h2 className="place__title">{props.card.name}</h2>
        <div className="place__like-area">
          <button
            type="button"
            className={cardLikeButtonClassName}
            aria-label="поставить лайк"
            onClick={handleLikeClick}
          />
          <p className={cardLikeCountColorClassName}>
            {props.card.likes.length}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Card;
