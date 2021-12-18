import React from "react";
import Player from "../Player/Player";
import GameSettings from "../GameSettings/GameSettings";
import Rules from "../Rules/Rules";
import "../Components.css";
import bgm from "../../audio/bgm.mp3";
import diceSE1 from "../../audio/diceRoll1.wav";
import diceSE2 from "../../audio/diceRoll2.wav";
import diceSE3 from "../../audio/diceRoll3.wav";
import diceSE4 from "../../audio/diceRoll4.wav";
import diceSE5 from "../../audio/diceRoll5.wav";

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
    isPlayer1: true,
    player2Name: "Player 2",
    player2Classes: "",
    players2total: 0,
    player2current: 0,
    isPlayer2: false,
    inputShow: true,
    rulesShow: true,
    btnDisable: true,
  };

  handleRoll = () => {
    if (!this.state.winner && !this.state.btnDisable) {
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

      this.handleDiceSoundPlay();

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
            isPlayer1: false,
            isPlayer2: true,
          });
        } else {
          this.setState({
            player2current: 0,
            playerTurn: 1,
            player1Classes: "current-player",
            player2Classes: "",
            isPlayer1: true,
            isPlayer2: false,
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
    if (!this.state.winner && !this.state.btnDisable) {
      if (this.state.playerTurn === 1) {
        this.setState({
          players1total: this.state.players1total + this.state.player1current,
          player1current: 0,
          playerTurn: 2,
          player1Classes: "",
          player2Classes: "current-player",
          isPlayer1: false,
          isPlayer2: true,
        });
      } else {
        this.setState({
          players2total: this.state.players2total + this.state.player2current,
          player2current: 0,
          playerTurn: 1,
          player1Classes: "current-player",
          player2Classes: "",
          isPlayer1: true,
          isPlayer2: false,
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
        isPlayer2: false,
      });
    } else if (this.state.players2total >= this.state.pointsToWin) {
      this.setState({
        player2Name: "WINNER!",
        winner: true,
        player1Classes: "",
        player2Classes: "winner-player",
        isPlayer1: false,
      });
    }
  };

  handleNewGame = () => {
    if (!this.state.btnDisable) {
      this.setState({
        pointsToWin: 100,
        dice: [null, null],
        playerTurn: 1,
        winner: false,
        player1Name: "Player 1",
        player1Classes: "current-player",
        players1total: 0,
        player1current: 0,
        isPlayer1: true,
        player2Name: "Player 2",
        player2Classes: "",
        players2total: 0,
        player2current: 0,
        isPlayer2: false,
        inputShow: true,
        btnDisable: true,
      });
    }
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
    this.setState({ btnDisable: false });
  };

  handleHideRules = () => {
    this.setState({ rulesShow: false });
    this.handlePlayBGM();
  };

  handlePlayBGM = () => {
    const bgmEl = new Audio(bgm);
    bgmEl.volume = 0.5;
    bgmEl.loop = true;
    bgmEl.play();
  };

  handleDiceSoundPlay = () => {
    const diceSoundEffects = [diceSE1, diceSE2, diceSE3, diceSE4, diceSE5];
    const randomDiceSound = diceSoundEffects[Math.floor(Math.random() * 5)];
    const diceSoundEl = new Audio(randomDiceSound);
    diceSoundEl.volume = 0.8;
    diceSoundEl.play();
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
          isTheirTurn={this.state.isPlayer1}
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
          isTheirTurn={this.state.isPlayer2}
        />
      </div>
    );
  }
}

export default GameBoard;
