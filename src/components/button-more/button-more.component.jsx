import React from "react";
import "./button-more.styles.scss";
const ButtonMore = ({ onClick }) => {
  return (
    <div className="button-container">
      <button className="button-more" onClick={onClick}>
        بیشتر
      </button>
    </div>
  );
};
export default ButtonMore;
