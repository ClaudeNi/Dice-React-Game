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
      <Btn
        icon={<i class="fal fa-flag-checkered"></i>}
        text="Begin"
        handleClick={props.hideHandle}
      />
    </div>
  );
};

export default Rules;
