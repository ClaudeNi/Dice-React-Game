import React from "react";
import Box from "../Box/Box";
import "../Components.css";

const Player = (props) => {
  return (
    <div className="player-container">
      <Box classes="box box-title" text={["Player", 0]} />
      <Box classes="box box-current" text={["Current", 0]} />
    </div>
  );
};

export default Player;
