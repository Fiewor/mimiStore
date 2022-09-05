import React from "react";

const Category = ({ category, categoryCount }) => {
  return (
    <>
      <h3>{category}</h3>
      <span>{categoryCount}</span>
    </>
  );
};

export default Category;
