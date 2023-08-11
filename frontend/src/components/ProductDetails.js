import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading'; // Import the Loading component

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${productId}`);
        const data = await response.json();
        setProductDetails(data);
        setLoading(false); // Turn off loading state when data is fetched
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false); // Turn off loading state on error too
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div className="product-details">
      {loading ? (
        <Loading />
      ) : (
        <>
          {productDetails ? (
            <div>
              <h2>{productDetails.title}</h2>
              <p>{productDetails.description}</p>
              <p>Price: ${productDetails.price}</p>
              <p>Category: {productDetails.category}</p>
              {/* Add more details as needed */}
            </div>
          ) : (
            <p>Product details not found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetails;
