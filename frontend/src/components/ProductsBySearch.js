import React, { useState, useEffect } from 'react';
import ProductItemList from './ProductItemList';
import Loading from './Loading'; // Import the Loading component
import './ProductsBySearch.css';
import SERVICE_URL from '../config';

const ProductsBySearch = ({ searchString }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    const fetchSearchProducts = async () => {
      try {
        const response = await fetch(`${SERVICE_URL}/search?term=${searchString}`);
        const data = await response.json();
        setProducts(data);
        setLoading(false); // Turn off loading state when data is fetched
      } catch (error) {
        console.error('Error fetching search products:', error);
        setLoading(false); // Turn off loading state on error too
      }
    };

    fetchSearchProducts();
  }, [searchString]);

  return (
    <div className="products-by-search">
      <h2>Search Results for "{searchString}"</h2>
      {loading ? (
        <Loading /> // Show Loading component while fetching data
      ) : (
        <>
          {products.length > 0 ? (
            <ProductItemList products={products} />
          ) : (
            <p>No products found for your search.</p>
          )}
        </>
      )}
    </div>
  );
};

export default ProductsBySearch;
