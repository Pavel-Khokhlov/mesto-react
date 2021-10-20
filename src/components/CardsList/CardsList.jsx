import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../store/dataSlice";
import Card from "../Card/Card";
import Loader from "../Loader/Loader.jsx";

import './CardsList.css';

const CardsList = () => {
  const dispatch = useDispatch();
  const { cards, status } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  if (status === "loading") {
    return <Loader />;
  }
  return (
    <ul className="cardslist">
      {cards.map((card) => {
        return <Card key={card._id} card={card} />;
      })}
    </ul>
  );
};

export default CardsList;
