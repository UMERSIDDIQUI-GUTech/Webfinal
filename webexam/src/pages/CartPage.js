import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CartPage = ({ cart, removeFromCart, clearCart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/thank-you");
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {/* Display "Your cart is empty" when cart is empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(index)} className="remove-button">
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <span>Total</span>
            <span className="amount">${total.toFixed(2)}</span>
          </div>

          <div className="cart-actions">
            <button className="checkout" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          {/* <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link> */}
        </>
      )}
    </div>
  );
};

export default CartPage;
