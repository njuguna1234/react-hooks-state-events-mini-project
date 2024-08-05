
import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <button
          key={index}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
