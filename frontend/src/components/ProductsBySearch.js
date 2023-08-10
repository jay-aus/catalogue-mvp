import React, { useState, useEffect } from 'react';
import ProductItemList from './ProductItemList';
import './ProductsBySearch.css'; // Create this CSS file

const ProductsBySearch = ({ searchString }) => {
    console.log("Product Search: ", searchString);
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchSearchProducts = async () => {
        try {
          const response = await fetch(`http://localhost:5000/search?term=${searchString}`);
          
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching search products:', error);
        }
      };
  
      fetchSearchProducts();
    }, [searchString]);
  
    return (
      <div className="products-by-search">
        <h2>Search Results for "{searchString}"</h2>
        {products.length > 0 ? (
          <ProductItemList products={products} />
        ) : (
          <p>No products found for your search.</p>
        )}
      </div>
    );
  };
  
  export default ProductsBySearch;
  