import React from "react";
import "./stat-card.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
const StatCard = ({ name, icon, color, trailColor, total, used, unit }) => {
  const percentage = Math.floor((used / total) * 100);
  return (
    <article className={`stat-card`}>
      <div className="stat-info">
        <p className="name">
          <FontAwesomeIcon
            icon={["fas", icon]}
            style={{ background: color }}
            className="fontawsome-icon"
          />
          {name}
        </p>
        <p className="used-resource">استفاده شده : {used + unit}</p>
      </div>
      <div className={`stat-progress`}>
        <p>کل:{total + unit}</p>
        <Progress
          percent={percentage}
          theme={{
            active: {
              trailColor,
              color,
            },
          }}
        />
      </div>
    </article>
  );
};
export default StatCard;
