import React from "react";

const WordListComponent = ({ products }) => {
  if (!products) return null;

  return (
    <ul data-testid="cypress-product-list" style={{ backgroundColor: "white" }}>
      {products.map((product, index) => (
        <li key={index}>
          {product.title}: {product.price}
        </li>
      ))}
    </ul>
  );
};

export default WordListComponent;
