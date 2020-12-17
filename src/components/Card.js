import React from "react";
import "../pages/index.css";

const Card = (props) => {
  return (
    <li className="place">
      <button
        type="button"
        className="button place__del-btn"
        aria-label="удалить место"
      />
      <button type="button" className="button place__img-btn">
        <img src={props.link} alt={props.title} className="place__image" />
      </button>
      <div className="place__info">
        <h2 className="place__title">{props.title}</h2>
        <div className="place__like-area">
          <button
            type="button"
            className="button place__like-btn"
            aria-label="поставить лайк"
          />
          <p className="paragraph place__like-count">{props.countLikes}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
