import React, { useState } from "react";
import "./select-resource-items-list.styles.scss";
import Card from "../card/card.component";
import SelectResourceRadioButton from "../select-resource-radio-button/select-resource-radio-button.component";
const SelectResourceItemsList = () => {
  const [selectedMode, setSelectedMode] = useState("custom");

  const handleSelect = (name) => {
    setSelectedMode(name);
  };
  return <div className="select-resource-items-list"></div>;
};
export default SelectResourceItemsList;
