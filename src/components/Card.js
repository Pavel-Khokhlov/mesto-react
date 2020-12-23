import React from "react";

const Card = (props) => {
  const handleClick = () => {
    console.log(props.card);
    props.onCardClick(props.card);
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
          src={props.card.link}
          alt={props.card.name}
          className="place__image"
          onClick={handleClick}
        />
      </button>
      <div className="place__info">
        <h2 className="place__title">{props.card.name}</h2>
        <div className="place__like-area">
          <button
            type="button"
            className="button place__like-btn"
            aria-label="поставить лайк"
          />
          <p className="paragraph place__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
