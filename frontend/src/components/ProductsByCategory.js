import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductItemList from './ProductItemList'; // Import your ProductItemList component
import './ProductsByCategory.css';

const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/category/${categoryName}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <div className="products-by-category">
      <h2>Products in {categoryName}</h2>
      <ProductItemList products={products} />
    </div>
  );
};

export default ProductsByCategory;
