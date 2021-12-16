import React from "react";
import Btn from "../Btn/Btn";
import "../Components.css";
import Dice from "../Dice/Dice";

const GameSettings = (props) => {
  return (
    <div className="gamesettings-container">
      <Btn text="New Game" handleClick={props.newGameHandle} />
      <Dice source={props.diceImgs[0]} />
      <Dice source={props.diceImgs[1]} />
      <Btn text="Roll Dice" handleClick={props.rollHandle} />
      <Btn text="Hold" handleClick={props.holdHandle} />
      <input></input>
    </div>
  );
};

export default GameSettings;
