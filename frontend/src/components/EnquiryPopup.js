import React, { useState } from 'react';

const EnquiryPopup = ({ productId, productTitle, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, productId, productTitle }),
      });
      
      if (response.ok) {
        console.log('Enquiry sent successfully');
      } else {
        console.error('Error sending enquiry');
      }
    } catch (error) {
      console.error('Error sending enquiry:', error);
    }
    
    onClose();
  };

  return (
    <div className="enquiry-popup">
      <div className="enquiry-form-container">
        <h2>Enquiry Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-row">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-row">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="button-row">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryPopup;
