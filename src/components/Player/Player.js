import React from "react";
import Box from "../Box/Box";
import "../Components.css";

const Player = (props) => {
  return (
    <div className={`player-container ${props.current}`}>
      <Box
        classes="box box-title"
        icon={<i class="fas fa-user"></i>}
        text={[props.name, props.totalDice]}
      />
      <Box
        classes="box box-current"
        icon={<i class="fas fa-star"></i>}
        text={["Current", props.currentDice]}
      />
    </div>
  );
};

export default Player;
