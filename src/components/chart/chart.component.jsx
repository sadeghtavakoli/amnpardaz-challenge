import React from "react";
import "./chart.styles.scss";
import ServerChart from "react-apexcharts";
const chartData = {
  series: [
    {
      name: "series1",
      data: [131, 40, 28, 51, 42, 155, 109, 100],
    },
  ],
  options: {
    fill: {
      colors: ["#2A516B", "#2A516B"],
      opacity: 1,
      type: "solid",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    yaxis: { show: false },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};
const Chart = () => {
  return (
    <div className="chart">
      <ServerChart
        series={chartData.series}
        options={chartData.options}
        height="100%"
        type="area"
      />
    </div>
  );
};
export default Chart;
