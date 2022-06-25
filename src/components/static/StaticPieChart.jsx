import React from "react";

const StaticPieChart = () => {
  return (
    <div className="absolute top-0 left-0 pointer-events-none">
      <div className="relative">
        <div className="bg-primary-light w-48 h-48 rounded-full absolute top-0"></div>
        <div className="bg-static-pie-chart w-48 h-48 rounded-full absolute top-0"></div>
      </div>
    </div>
  );
};

export default StaticPieChart;
