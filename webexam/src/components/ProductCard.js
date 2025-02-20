import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <div className="product-card-actions">
        <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
        <button className="favourite-button" onClick={toggleFavourite}>
          <span role="img" aria-label="favourite">
            {isFavourite ? "❤️" : "🤍"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
