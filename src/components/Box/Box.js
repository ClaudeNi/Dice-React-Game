import React from "react";
import "../Components.css";

const Box = (props) => {
  return (
    <div className={props.classes}>
      <span className="box-upper-text">
        {props.icon} {props.text[0]}
      </span>
      <span className="box-bottom-text">{props.text[1]}</span>
    </div>
  );
};

export default Box;
