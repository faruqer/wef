import React, { useState } from "react";
import "./css/App.css"
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Cart from "./Cart"; 
import CartOverview from "./CartOverview"; // Import CartOverview component
import Wishlist from "./Wishlist"; // Import Wishlist component
import OrderSummary from "./OrderSummary"; // Import OrderSummary component
import ChatbotLink from "./ChatbotLink"; // Import ChatbotLink component
import ManufacturerCategorizer from "./ManufacturerCategorizer"; // Import ManufacturerCategorizer
import ShippingOptions from "./ShippingOptions"; // Import ShippingOptions
import PaymentOptions from "./PaymentOptions"; // Import PaymentOptions
import Footer from "./Footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [shippingOption, setShippingOption] = useState(null); // Track selected shipping option
  const [paymentOption, setPaymentOption] = useState(""); // Track selected payment option
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + (shippingOption ? shippingOption.cost : 0); // Include shipping cost in total

  // Sample categories
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
  ];

  // Sample manufacturers and their products categorized
  const manufacturers = [
    {
      id: 1,
      name: "Manufacturer A",
      category: "Electronics",
      products: [
        {
          id: 1,
          name: "Product A1",
          image: "https://via.placeholder.com/100",
          price: 29.99,
          bulkPrice: 24.99,
          rating: 4.5,
          availability: true,
          description: "Description for Product A1",
          comments: ["Great product!", "Loved it!"],
        },
        {
          id: 2,
          name: "Product A2",
          image: "https://via.placeholder.com/100",
          price: 19.99,
          bulkPrice: 17.99,
          rating: 4.0,
          availability: true,
          description: "Description for Product A2",
          comments: ["Good value.", "Satisfactory purchase."],
        },
      ],
    },
    {
      id: 2,
      name: "Manufacturer B",
      category: "Clothing",
      products: [
        {
          id: 3,
          name: "Product B1",
          image: "https://via.placeholder.com/100",
          price: 39.99,
          bulkPrice: 34.99,
          rating: 4.8,
          availability: true,
          description: "Description for Product B1",
          comments: ["Excellent quality!", "Highly recommended!"],
        },
        {
          id: 4,
          name: "Product B2",
          image: "https://via.placeholder.com/100",
          price: 24.99,
          bulkPrice: 22.99,
          rating: 4.2,
          availability: false,
          description: "Description for Product B2",
          comments: ["Not bad.", "Could be better."],
        },
      ],
    },
  ];

  const handleShippingChange = (method) => {
    setShippingOption(method); // Update selected shipping option
  };

  const handlePaymentChange = (method) => {
    setPaymentOption(method); // Update selected payment option
  };

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...existingProduct, quantity: existingProduct.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="top-part">
        <h1>Welcome back <span>Username</span> </h1>
        <SearchBar className="search-bar" searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
      </div>

      <ManufacturerCategorizer 
        categories={categories} 
        manufacturers={manufacturers} 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
        handleAddToCart={handleAddToCart} // Pass handleAddToCart function
      />

      <ShippingOptions onShippingChange={handleShippingChange} />
      <PaymentOptions onPaymentChange={handlePaymentChange} />

      <Cart cartItems={cartItems} total={total} />
      <CartOverview cartItems={cartItems} total={total} onRemoveFromCart={handleRemoveFromCart} /> {/* Add CartOverview component */}
      <Wishlist wishlistItems={[]} />
      <OrderSummary orderDetails={cartItems} />
      <Footer />
    </div>
  );
};

export default App;
