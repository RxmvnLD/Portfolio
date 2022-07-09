import React from "react";

const NumberedHeading = ({ number, heading }) => {
  return (
    <>
      <div className="flex flex-row items-center gap-2 mb-5 font-mono">
        <p className="text-lg text-teal-400 xl:text-2xl">0{number}.</p>
        <h2 className="text-2xl font-normal">{heading}</h2>
        <div className=" w-20  xl:w-32 h-0.5 bg-teal-400" />
      </div>
    </>
  );
};

export default NumberedHeading;
