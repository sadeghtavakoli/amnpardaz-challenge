import React from "react";
import "./monthly-usage.styles.scss";
import Card from "../card/card.component";
import MonthlyUsageDataList from "../monthly-usage-data-list/monthly-usage-data-list.component";
import MontlyUsageProgressBar from "../monthly-usage-progress-bar/monthly-usage-progress-bar.component";

const dataList = [
  { id: 1, name: "سرور", price: "300000", color: "#F45454" },
  { id: 2, name: "امنیت ابری", price: "240000", color: "#7879D4" },
  { id: 3, name: "فضای ذخیره سازی", price: "100000", color: "#FEDB80" },
  { id: 4, name: "وی پی ان", price: "40000", color: "#1DB29C" },
  { id: 5, name: "پهنای باند", price: "30000", color: "#F4891E" },
];
const totalPrice = dataList.reduce((sum, b) => {
  console.log(b.price);
  return sum + Number(b.price);
}, 0);
const totalVolume = {
  name: "کل حجم",
  price: totalPrice,
  color: "#4C4777",
};
const MonthlyUsage = () => {
  return (
    <Card title="مصرف ماهیانه سرویس ها" containerClass="monthly-usage">
      <MontlyUsageProgressBar dataList={dataList} totalVolume={totalVolume} />
      <MonthlyUsageDataList dataList={dataList} totalVolume={totalVolume} />
    </Card>
  );
};
export default MonthlyUsage;
