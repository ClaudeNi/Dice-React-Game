import React from "react";
import "../Components.css";

const Dice = (props) => {
  return <div className={"dice " + props.source}></div>;
};

export default Dice;
