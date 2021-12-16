import React from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GameBoard />
      </div>
    );
  }
}

export default App;
