import React from "react";
import MonthlyUsageDataItem from "../monthly-usage-data-item/monthly-usage-data-item.component";
import "./monthly-usage-data-list.styles.scss";

const MonthlyUsageDataList = ({ dataList, totalVolume }) => {
  return (
    <div className="monthly-usage-data-list">
      {dataList.map(({ id, name, price, color }) => (
        <MonthlyUsageDataItem
          key={id + ""}
          name={name}
          price={price}
          color={color}
        />
      ))}
      <hr />
      <MonthlyUsageDataItem
        name={totalVolume.name}
        price={totalVolume.price}
        color={totalVolume.color}
      />
    </div>
  );
};
export default MonthlyUsageDataList;
