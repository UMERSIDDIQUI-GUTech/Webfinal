// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
