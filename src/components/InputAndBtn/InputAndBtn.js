import React from "react";
import Btn from "../Btn/Btn";

const InputAndBtn = (props) => {
  const inputChange = (e) => {
    props.inputHandle(e.target.value);
  };

  return (
    <div className="intro-container">
      <p>Please input a number that is bigger than 0 to be your goal.</p>
      <input
        type={"number"}
        min={0}
        placeholder="Input Goal"
        onChange={inputChange}
      ></input>
      <Btn
        icon={<i className="fal fa-lock"></i>}
        text="Lock Goal"
        handleClick={props.lockHandle}
      />
    </div>
  );
};

export default InputAndBtn;
