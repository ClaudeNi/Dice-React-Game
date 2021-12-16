import React from "react";
import Btn from "../Btn/Btn";
import "../Components.css";
import Dice from "../Dice/Dice";

const GameSettings = (props) => {
  return (
    <div className="gamesettings-container">
      <Btn text="New Game" />
      <Dice />
      <Dice />
      <Btn text="Roll Dice" />
      <Btn text="Hold" />
      <input></input>
    </div>
  );
};

export default GameSettings;
