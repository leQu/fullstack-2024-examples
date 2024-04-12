import React from "react";

const CustomButton = ({ customClick, children }) => {
  return (
    <button
      id="crap"
      data-info-stuff="some info"
      onClick={(event) => customClick(event)}
    >
      {children}
    </button>
  );
};

export default CustomButton;
