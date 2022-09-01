import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // Transform array of objects into array of numbers
  const dataPointValues = props.dataPoints.map((dp) => dp.value);

  // pull out the array of numbers using spread operator
  // max takes (1, 2, 3)
  const totalMaximum = Math.max(...dataPointValues);    

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
