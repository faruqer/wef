import React from "react";
import './css/CategorySelection.css';

const CategorySelection = ({ categories, onCategorySelect }) => {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <div
          key={category.id}
          className="category-card"
          onClick={() => onCategorySelect(category.id)}
        >
          <img src={category.image} alt={category.name} className="category-image" />
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategorySelection;
