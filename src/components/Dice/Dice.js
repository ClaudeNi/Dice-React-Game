import React from "react";
import "../Components.css";

const Dice = () => {
  const rollDice = () => {
    return Math.ceil(Math.random() * 6);
  };

  return <div className="dice">{rollDice()}</div>;
};

export default Dice;
