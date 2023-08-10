// ProductItemList.js
import React from 'react';
import ProductItem from './ProductItem'; // Import the ProductItem component
import './ProductItemList.css'; // Create this CSS file

const ProductItemList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductItemList;
