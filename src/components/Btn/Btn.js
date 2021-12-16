import React from "react";
import "../Components.css";

const Btn = (props) => {
  return (
    <div className="btn" onClick={props.handleClick}>
      {props.text}
    </div>
  );
};

export default Btn;
