import React from "react";
import "./select-os.styles.scss";
import Card from "../card/card.component";
const SelectOS = () => {
  return (
    <Card
      title="انتخاب سیستم عامل"
      containerClass="select-os"
      cornerRound
      onClick={() => alert("سیستم عامل دیگری برای نشان دادن وجود ندارد")}
      btnToRight
    ></Card>
  );
};
export default SelectOS;
