import React from "react";
import "./monthly-usage-data-item.styles.scss";

const MonthlyUsageDataItem = ({ color, name, price }) => {
  return (
    <div className="monthly-usage-data-item">
      <div className="item-name-container">
        <div className="square" style={{ background: color }}></div>
        <span>{name}</span>
      </div>
      <span>{price} هزار ریال</span>
    </div>
  );
};
export default MonthlyUsageDataItem;
