import React, { useState } from "react";
import "./select-resource-ranges-list.styles.scss";
import SelectResourceRangeItem from "../select-resource-range-item/select-resource-range-item.component";

const initialResourceList = [
  {
    id: 0,
    name: " رم",
    unit: "گیگ",
    icon: "laptop-code",
    minValue: 1,
    maxValue: 64,
    value: 16,
    defaultValue: 16,
    color: "green",
  },
  {
    id: 1,
    name: " پردازنده",
    unit: "هسته",
    icon: "fan",
    minValue: 1,
    maxValue: 32,
    value: 8,
    defaultValue: 8,
    color: "yellow",
  },
  {
    id: 2,
    name: " فضای ذخیره سازی",
    unit: "گیگ",
    icon: "memory",
    minValue: 20,
    maxValue: 1000,
    value: 500,
    defaultValue: 500,
    color: "blue",
  },
];

const SelectResourceRangesList = ({ useDefault }) => {
  const [resourceList, setResourceList] = useState([...initialResourceList]);

  const handleChange = (id, value) => {
    const prevResourceItem = { ...resourceList[id] };
    let newResourceList = [...resourceList];
    const newResourceItem = { ...prevResourceItem, value };
    newResourceList[id] = { ...newResourceItem };

    setResourceList(newResourceList);
  };
  return (
    <div className="select-resource-ranges-list">
      {resourceList.map((resourceItem) => (
        <SelectResourceRangeItem
          key={resourceItem.id}
          useDefault={useDefault}
          onChange={handleChange}
          {...resourceItem}
        />
      ))}
    </div>
  );
};
export default SelectResourceRangesList;
