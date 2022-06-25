import React from "react";

const Carrousel = ({ children }) => {
  return (
    <div className="flex gap-4 overflow-x-scroll overflow-y-hidden pb-5">
      {children}
    </div>
  );
};

export default Carrousel;
