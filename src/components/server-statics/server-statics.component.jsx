import React, { useState } from "react";
import "./server-statics.styles.scss";
import StatCard from "../stat-card/stat-card.component";

const ServerStatics = ({ statics }) => {
  return (
    <div className="server-statics">
      {statics.map(({ id, ...otherStatProps }) => (
        <StatCard {...otherStatProps} />
      ))}
    </div>
  );
};
export default ServerStatics;
