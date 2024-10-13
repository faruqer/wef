import React from "react";

const ProductList = ({ products, onAddToCart, onBack }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
      <button onClick={onBack}>Back to Manufacturers</button>
    </div>
  );
};

export default ProductList;
