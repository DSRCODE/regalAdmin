import React, { useState } from "react";
import Chart from "react-apexcharts";

import './Graphs.css'

const Graphs = () => {
  const [options, setOptions] = useState({
    chart: {  // Fix: Use 'chart' instead of 'Chart'
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 45],
    },
  ]);  // Fix: Make sure series is an array of objects

  return (
    <div className="graphs-1">
      <Chart
        options={options}
        series={series}
        type="line"
      />
    </div>
  );
};

const Graphs2 = () => {
  const [options, setOptions] = useState({
    chart: {  // Fix: Use 'chart' instead of 'Chart'
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 20],
    },
  ]);  // Fix: Make sure series is an array of objects

  return (
    <div className="graphs-1">
      <Chart
        options={options}
        series={series}
        type="bar"
      />
    </div>
  );
};

export { Graphs, Graphs2 };
