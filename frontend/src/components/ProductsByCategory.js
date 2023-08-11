import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductItemList from './ProductItemList';
import Loading from './Loading'; // Import the Loading component
import './ProductsByCategory.css';
import SERVICE_URL from '../config';

const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state as true
  const { categoryName } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchCategoryProducts = async () => {
      try {
        const response = await fetch(`${SERVICE_URL}/products/category/${categoryName}`);
        const data = await response.json();
        setProducts(data);
        setLoading(false); // Turn off loading state when data is fetched
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false); // Turn off loading state on error too
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <div className="products-by-category">
      <h2>Products in {categoryName}</h2>
      {loading ? (
        <Loading /> // Show Loading component while fetching data
      ) : (
        <ProductItemList products={products} />
      )}
    </div>
  );
};

export default ProductsByCategory;
