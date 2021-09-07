import React from "react";
import "./button-plus.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonPlus = ({ text, onClick }) => {
  return (
    <div className="button-container">
      <button className="button-plus" onClick={onClick}>
        {text}
        <FontAwesomeIcon
          icon={["fas", "plus-circle"]}
          className="fontawsome-icon"
        />
      </button>
    </div>
  );
};
export default ButtonPlus;
