import React from "react";

const StaticGraphChart = () => {
  return (
    <div className="absolute bottom-0 right-0 pointer-events-none">
      <div className="relative">
        <div className="bg-primary-light w-48 h-48 rounded-full absolute top-0"></div>
        <div className="bg-static-pie-chart w-48 h-48 rounded-full absolute top-0"></div>
      </div>
    </div>
  );
};

export default StaticGraphChart;
