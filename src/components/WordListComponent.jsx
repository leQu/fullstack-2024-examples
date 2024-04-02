import React from "react";

const WordListComponent = ({ words }) => {
  return (
    <ul style={{ backgroundColor: "white" }}>
      {words.map((word, index) => (
        <li key={index}>{word}</li>
      ))}
    </ul>
  );
};

export default WordListComponent;
