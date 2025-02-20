// src/components/CartList.js
import React from 'react';
import CartItem from './CartItem';

const CartList = ({ cart, removeFromCart, clearCart }) => {
    return (
        <div>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                    ))}
                    <div className="flex justify-between items-center mt-6">
                        <button
                            onClick={clearCart}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Clear Cart
                        </button>
                        <p className="text-lg font-bold">
                            Total: ${cart.reduce((total, item) => total + item.price, 0)}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartList;
