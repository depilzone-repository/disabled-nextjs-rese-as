"use client";
import React from "react";

interface LineCornerProps {
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

const LineCorner: React.FC<LineCornerProps> = ({ position }) => {
  const borderStyles = {
    topLeft: "border-t-4 border-l-4 rounded-tl-lg",
    topRight: "border-t-4 border-r-4 rounded-tr-lg",
    bottomLeft: "border-b-4 border-l-4 rounded-bl-lg",
    bottomRight: "border-b-4 border-r-4 rounded-br-lg",
  };

  const positionStyles = {
    topLeft: "top-0 left-0",
    topRight: "top-0 right-0",
    bottomLeft: "bottom-0 left-0",
    bottomRight: "bottom-0 right-0",
  };

  return (
    <div
      className={`absolute ${positionStyles[position]} w-8 h-8`}
    >
      <div className={`${borderStyles[position]} border-cyan-500 w-full h-full`}></div>
    </div>
  );
};

export default LineCorner;
