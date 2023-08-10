import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ProductItem.css'; // Import the CSS file for styling

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`} className="product-link">
        {/*<div className="product-image">
          <img src={product.image} alt='' />
        </div>*/}
        <div className="product-details">
          <div className="product-title">{product.title}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-price">${product.price}</div>
          <div className="product-category">{product.category}</div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
