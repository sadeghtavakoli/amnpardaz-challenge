import React, { useState } from "react";
import "./select-resource.styles.scss";
import Card from "../card/card.component";
import SelectResourceRadioButton from "../select-resource-radio-button/select-resource-radio-button.component";
import SelectResourceRangesList from "../select-resource-ranges-list/select-resource-ranges-list.component";

const modes = [
  { id: 0, name: "تنظیمات دستی" },
  { id: 1, name: "تنظیمات خودکار" },
];

const SelectResource = () => {
  const [selectedModeID, setSelectedModeID] = useState(0);

  return (
    <Card title="انتخاب منابع" containerClass="select-resource" cornerRound>
      <div className="radio-buttons-container">
        {modes.map(({ id, name }) => (
          <SelectResourceRadioButton
            key={id + ""}
            name={name}
            isSelected={selectedModeID === id}
            onClick={() => setSelectedModeID(id)}
          />
        ))}
      </div>

      <SelectResourceRangesList useDefault={selectedModeID} />
    </Card>
  );
};
export default SelectResource;
