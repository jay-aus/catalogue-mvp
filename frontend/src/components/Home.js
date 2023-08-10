// Home.js
import React, { useState, useEffect } from 'react';
import ProductItemList from './ProductItemList';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="product-container">
        <ProductItemList products={products} />
      </div>
    </div>
  );
};

export default Home;
