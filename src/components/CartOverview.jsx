// CartOverview.js
import React, { useState } from "react";

const CartOverview = ({ cartItems, total, onRemoveFromCart, onUpdateQuantity }) => {
  return (
    <div className="cart-overview">
      <h2>Cart Overview</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default CartOverview;
