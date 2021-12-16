import React from "react";
import Player from "../Player/Player";
import GameSettings from "../GameSettings/GameSettings";
import "../Components.css";

class GameBoard extends React.Component {
  render() {
    return (
      <div className="gameboard-container">
        <Player />
        <GameSettings />
        <Player />
      </div>
    );
  }
}

export default GameBoard;
