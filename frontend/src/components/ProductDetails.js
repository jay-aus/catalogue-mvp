import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading'; // Import the Loading component
import EnquiryPopup from './EnquiryPopup'; // Import the EnquiryPopup component
import ReactDOM from 'react-dom'; // Import ReactDOM

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${productId}`);
        const data = await response.json();
        setProductDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleEnquireClick = () => {
    // Open the enquiry form in a new popup window
    const popup = window.open('', 'enquiryPopup', 'width=400,height=400');
    popup.document.body.innerHTML = '<div id="popup-root"></div>';
    ReactDOM.render(
      <EnquiryPopup productId={productId} productTitle={productDetails.title} onClose={() => popup.close()} />,
      popup.document.getElementById('popup-root')
    );
  };

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
              <button onClick={handleEnquireClick}>Enquire</button>
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
