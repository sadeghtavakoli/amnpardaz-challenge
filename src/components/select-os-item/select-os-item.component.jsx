import React from "react";
import "./select-os-item.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectOSItem = ({ name, Logo, onSelect, onClick, isSelected }) => {
  return (
    <div>
      <div
        className={`select-os-item  ${isSelected ? "selected" : ""}`}
        onClick={onSelect}
      >
        <div className="item-name-container">
          <Logo className="os-logo" />
          <span>{name}</span>
        </div>
        <div className="os-type" onClick={onClick}>
          انتخاب نوع os
          <FontAwesomeIcon
            icon={["fas", "chevron-left"]}
            className="fontawsome-icon"
          />
        </div>
      </div>
    </div>
  );
};
export default SelectOSItem;
