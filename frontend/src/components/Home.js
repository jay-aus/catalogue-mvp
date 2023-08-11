import React, { useState, useEffect } from 'react';
import ProductItemList from './ProductItemList';
import Loading from './Loading'; // Import the Loading component
import './Home.css';
import SERVICE_URL from '../config';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${SERVICE_URL}/products`);
        const data = await response.json();
        setProducts(data);
        setLoading(false); // Turn off loading state when data is fetched
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false); // Turn off loading state on error too
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="product-container">
          <ProductItemList products={products} />
        </div>
      )}
    </div>
  );
};

export default Home;
