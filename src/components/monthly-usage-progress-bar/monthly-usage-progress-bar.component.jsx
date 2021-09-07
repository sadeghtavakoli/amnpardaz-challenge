import React from "react";
import "./monthly-usage-progress-bar.styles.scss";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const renderProgressBars = (dataList, totalVolume) => {
  let itemsCount = dataList.length;

  let progressBars = <></>;

  for (let i = itemsCount - 1; i >= 0; i--) {
    const { price, color } = dataList[i];
    progressBars = (
      <div>
        <CircularProgressbarWithChildren
          value={price}
          maxValue={totalVolume.price}
          strokeWidth={7}
          styles={{
            root: {
              width: `${11 - 2 * i}rem`,
              transform: "rotate(0.5turn)",
              transformOrigin: "center center",
            },
            path: {
              stroke: color,
            },
            trail: {
              stroke: "white",
            },
          }}
        >
          {progressBars}
        </CircularProgressbarWithChildren>
      </div>
    );
  }
  return progressBars;
};

const MontlyUsageProgressBar = ({ dataList, totalVolume }) => {
  return (
    <div className="monthly-usage-progress-bar">
      <CircularProgressbarWithChildren
        value={totalVolume.price}
        maxValue={totalVolume.price}
        className="progress-bar"
        styles={buildStyles({
          trailColor: "white",
          pathColor: totalVolume.color,
        })}
      >
        {renderProgressBars(dataList, totalVolume)}
      </CircularProgressbarWithChildren>
      ;
    </div>
  );
};
export default MontlyUsageProgressBar;
