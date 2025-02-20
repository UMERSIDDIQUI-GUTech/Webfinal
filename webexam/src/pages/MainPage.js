// src/pages/MainPage.js
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const MainPage = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Gutech Exam Store</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {/* <Link to="/" className="goto-cart">
        Go to Cart
      </Link> */}
    </div>
  );
};

export default MainPage;
