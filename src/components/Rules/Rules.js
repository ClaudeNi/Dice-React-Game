import React from "react";
import Btn from "../Btn/Btn";

const Rules = (props) => {
  return (
    <div className="rules-container">
      <span className="title">Hello and welcome Claude's Dice game!</span>
      <span className="subtitle">The rules are simple and easy to follow:</span>
      <ul>
        <li>1. To win the game, reach the appropriate set goal.</li>
        <li>
          2. To collect points, you have to press "Hold" after having rolled
          your dice.
        </li>
        <li>
          3. If during your turn you roll and both your dice showed the same
          number then you will lose all your current accumulated points and the
          turn order will move to your opponent.
        </li>
      </ul>
      <span className="warning">
        warning: music will start playing once you press begin.
      </span>
      <Btn
        icon={<i className="fal fa-flag-checkered"></i>}
        text="Begin"
        handleClick={props.hideHandle}
      />
      <a className="link" href="https://www.hooksounds.com/">
        Background Music by HookSounds
      </a>
    </div>
  );
};

export default Rules;
