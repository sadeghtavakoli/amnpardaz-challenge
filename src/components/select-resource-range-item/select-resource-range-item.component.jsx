import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./select-resource-range-item.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectResourceRangeItem = ({
  id,
  name,
  minValue,
  maxValue,
  value,
  defaultValue,
  onChange,
  useDefault,
  unit,
  icon,
  color,
}) => {
  return (
    <div className="select-resource-range-item">
      <div className={`range range--${color}`}>
        <InputRange
          minValue={minValue}
          maxValue={maxValue}
          formatLabel={(currentValue) => <h3>{`${currentValue + unit} `}</h3>}
          ariaControls
          value={useDefault ? defaultValue : value}
          onChange={(value) => onChange(id, value)}
          disabled={useDefault}
        />
      </div>
      <p className="name">
        {name}
        <FontAwesomeIcon
          icon={["fas", icon]}
          style={{ background: color }}
          className="fontawsome-icon"
        />
      </p>
    </div>
  );
};
export default SelectResourceRangeItem;
