import React from "react";
import "../pages/index.css";

const Card = (props) => {
  const handleClick = () => {
    console.log(props.cardLink, props.cardTitle);
    props.onCardClick(props.cardLink, props.cardTitle);
  };

  return (
    <li className="place">
      <button
        type="button"
        className="button place__del-btn"
        aria-label="удалить место"
      />
      <button type="button" className="button place__img-btn">
        <img
          src={props.cardLink}
          alt={props.cardTitle}
          className="place__image"
          onClick={handleClick}
        />
      </button>
      <div className="place__info">
        <h2 className="place__title">{props.cardTitle}</h2>
        <div className="place__like-area">
          <button
            type="button"
            className="button place__like-btn"
            aria-label="поставить лайк"
          />
          <p className="paragraph place__like-count">{props.cardCountLikes}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
