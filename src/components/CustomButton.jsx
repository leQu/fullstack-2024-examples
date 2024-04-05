import React from "react";

const CustomButton = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default CustomButton;
