import React from "react";
import "./select-resource-radio-button.styles.scss";

const SelectResourceRadioButton = ({ name, isSelected, onClick }) => {
  return (
    <div
      className={`radio-button ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <span></span>
      {name}
    </div>
  );
};
export default SelectResourceRadioButton;
