import React from "react";
import "../../../src/stylesheets/TakeOrder.css";

function SendButton(props) {
  return (
    <button
      className={`send-button ${props.secondclass}`}
      type="submit"
      onClick={props.send}
    >
      {props.name}
    </button>
  );
}

export default SendButton;
