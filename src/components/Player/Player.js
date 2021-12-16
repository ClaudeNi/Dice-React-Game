import React from "react";
import Box from "../Box/Box";
import "../Components.css";

const Player = (props) => {
  return (
    <div className="player-container">
      <Box classes="box-title" />
      <Box classes="box-current" />
    </div>
  );
};

export default Player;
