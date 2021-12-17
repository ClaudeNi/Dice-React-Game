import React from "react";
import Btn from "../Btn/Btn";
import "../Components.css";
import Dice from "../Dice/Dice";

const GameSettings = (props) => {
  return (
    <div className="gamesettings-container">
      <Btn
        icon={<i class="fal fa-sparkles"></i>}
        text="New Game"
        handleClick={props.newGameHandle}
      />
      <Dice source={props.diceImgs[0]} />
      <Dice source={props.diceImgs[1]} />
      <Btn
        icon={<i class="fal fa-dice-six"></i>}
        text="Roll Dice"
        handleClick={props.rollHandle}
      />
      <Btn
        icon={<i class="fal fa-hand-paper"></i>}
        text="Hold"
        handleClick={props.holdHandle}
      />
      <input placeholder="Input Goal"></input>
    </div>
  );
};

export default GameSettings;
