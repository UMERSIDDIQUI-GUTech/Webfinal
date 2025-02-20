// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
    return (
        <div className="flex justify-between items-center border-b py-4">
            <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                </div>
            </div>
            <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
            >
                Remove
            </button>
        </div>
    );
};

export default CartItem;
