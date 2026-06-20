import React from "react";

const Heading = ({highlight,heading}) => {
  return (
    <div className="w-fit mx-auto">
      <h2 className="text-zinc-800 text-[2.5rem] lg:text-5xl font-bold">
        <span className="text-orange-500">{highlight}</span> {heading}
      </h2>
      <div className="w-34 h-1 bg-orange-300 mt-3 lg:mt-6 ml-auto"></div>
    </div>
  );
};

export default Heading;
