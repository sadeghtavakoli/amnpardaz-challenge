import React from "react";
import "./server-chart.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chart from "../chart/chart.component";

const ServerChart = () => {
  return (
    <article className="server-chart">
      <div className="chart-header">
        <h2 className="chart-heading">کارکرد سرور</h2>
        <FontAwesomeIcon icon={["fas", "ellipsis-h"]} className="more-btn" />
      </div>
      <Chart />
    </article>
  );
};
export default ServerChart;
