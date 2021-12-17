import React from "react";
import Btn from "../Btn/Btn";
import Dice from "../Dice/Dice";
import InputAndBtn from "../InputAndBtn/InputAndBtn";
import "../Components.css";

const GameSettings = (props) => {
  return (
    <div className="gamesettings-container">
      {props.inputShow && (
        <InputAndBtn
          inputHandle={props.inputHandle}
          lockHandle={props.lockHandle}
        />
      )}
      <Btn
        icon={<i className="fal fa-sparkles"></i>}
        text="New Game"
        handleClick={props.newGameHandle}
      />
      <Dice source={props.diceImgs[0]} />
      <Dice source={props.diceImgs[1]} />
      <Btn
        icon={<i className="fal fa-dice-six"></i>}
        text="Roll Dice"
        handleClick={props.rollHandle}
      />
      <Btn
        icon={<i className="fal fa-hand-paper"></i>}
        text="Hold"
        handleClick={props.holdHandle}
      />
    </div>
  );
};

export default GameSettings;
