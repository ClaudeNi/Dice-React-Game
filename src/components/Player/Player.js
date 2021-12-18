import React from "react";
import Box from "../Box/Box";
import "../Components.css";

const Player = (props) => {
  return (
    <div className={`player-container ${props.current}`}>
      <Box
        classes="box box-title"
        icon={<i className="fas fa-user"></i>}
        text={[props.name, props.totalDice]}
        isTheirTurn={props.isTheirTurn}
        current={<i className="fas fa-circle"></i>}
      />
      <Box
        classes="box box-current"
        icon={<i className="fas fa-star"></i>}
        text={["Current", props.currentDice]}
      />
    </div>
  );
};

export default Player;
