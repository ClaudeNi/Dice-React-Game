import React from "react";
import Player from "../Player/Player";
import GameSettings from "../GameSettings/GameSettings";
import Rules from "../Rules/Rules";
import "../Components.css";

class GameBoard extends React.Component {
  state = {
    pointsToWin: 100,
    dice: [null, null],
    playerTurn: 1,
    winner: false,
    player1Name: "Player 1",
    player1Classes: "current-player",
    players1total: 0,
    player1current: 0,
    player2Name: "Player 2",
    player2Classes: "",
    players2total: 0,
    player2current: 0,
    inputShow: true,
    rulesShow: true,
  };

  handleRoll = () => {
    if (!this.state.winner) {
      const imgUrls = {
        1: "dice-1",
        2: "dice-2",
        3: "dice-3",
        4: "dice-4",
        5: "dice-5",
        6: "dice-6",
      };
      const dice1 = this.rollDice();
      const dice2 = this.rollDice();

      this.setState({
        dice: [imgUrls[dice1], imgUrls[dice2]],
      });

      if (dice1 === dice2) {
        if (this.state.playerTurn === 1) {
          this.setState({
            player1current: 0,
            playerTurn: 2,
            player1Classes: "",
            player2Classes: "current-player",
          });
        } else {
          this.setState({
            player2current: 0,
            playerTurn: 1,
            player1Classes: "current-player",
            player2Classes: "",
          });
        }
      } else {
        this.addUpDice(dice1, dice2);
      }
    }
  };

  rollDice = () => {
    return Math.ceil(Math.random() * 6);
  };

  addUpDice = (dice1, dice2) => {
    const sum = dice1 + dice2;
    if (this.state.playerTurn === 1) {
      this.setState({ player1current: this.state.player1current + sum });
    } else {
      this.setState({ player2current: this.state.player2current + sum });
    }
  };

  handleHold = () => {
    if (!this.state.winner) {
      if (this.state.playerTurn === 1) {
        this.setState({
          players1total: this.state.players1total + this.state.player1current,
          player1current: 0,
          playerTurn: 2,
          player1Classes: "",
          player2Classes: "current-player",
        });
      } else {
        this.setState({
          players2total: this.state.players2total + this.state.player2current,
          player2current: 0,
          playerTurn: 1,
          player1Classes: "current-player",
          player2Classes: "",
        });
      }
      setTimeout(() => {
        this.checkIfWon();
      }, 0);
    }
  };

  checkIfWon = () => {
    if (this.state.players1total >= this.state.pointsToWin) {
      this.setState({
        player1Name: "WINNER!",
        winner: true,
        player1Classes: "winner-player",
        player2Classes: "",
      });
    } else if (this.state.players2total >= this.state.pointsToWin) {
      this.setState({
        player2Name: "WINNER!",
        winner: true,
        player1Classes: "",
        player2Classes: "winner-player",
      });
    }
  };

  handleNewGame = () => {
    this.setState({
      pointsToWin: 100,
      dice: [null, null],
      playerTurn: 1,
      winner: false,
      player1Name: "Player 1",
      player1Classes: "current-player",
      players1total: 0,
      player1current: 0,
      player2Name: "Player 2",
      player2Classes: "",
      players2total: 0,
      player2current: 0,
      inputShow: true,
    });
  };

  handleInput = (value) => {
    this.setState({ pointsToWin: value });
  };

  handleLock = () => {
    if (this.state.inputShow) {
      this.setState({ inputShow: false });
    } else {
      this.setState({ inputShow: true });
    }
    if (this.state.pointsToWin === "" || this.state.pointsToWin === undefined) {
      this.setState({ pointsToWin: 100 });
    }
  };

  handleHideRules = () => {
    this.setState({ rulesShow: false });
  };

  render() {
    return (
      <div className="gameboard-container">
        {this.state.rulesShow && <Rules hideHandle={this.handleHideRules} />}
        <Player
          name={this.state.player1Name}
          current={this.state.player1Classes}
          totalDice={this.state.players1total}
          currentDice={this.state.player1current}
        />
        <GameSettings
          diceImgs={this.state.dice}
          rollHandle={this.handleRoll}
          holdHandle={this.handleHold}
          newGameHandle={this.handleNewGame}
          inputHandle={this.handleInput}
          inputShow={this.state.inputShow}
          lockHandle={this.handleLock}
        />
        <Player
          name={this.state.player2Name}
          current={this.state.player2Classes}
          totalDice={this.state.players2total}
          currentDice={this.state.player2current}
        />
      </div>
    );
  }
}

export default GameBoard;
