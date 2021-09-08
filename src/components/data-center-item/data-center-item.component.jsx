import React from "react";
import "./data-center-item.styles.scss";

const DataCenterItem = ({
  dataCenter: { name, Logo },
  onClick,
  isSelected,
}) => {
  return (
    <div>
      <div
        className={`data-center-item  ${isSelected ? "selected" : ""}`}
        onClick={onClick}
      >
        <div className="item-name-container">
          <div className="square"></div>
          <span>{name}</span>
        </div>
        <Logo className="country-logo" />
      </div>
      <hr className="seprator" />
    </div>
  );
};
export default DataCenterItem;
