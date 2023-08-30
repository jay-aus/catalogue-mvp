import React, { useState } from 'react';

const Button = ({ onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);

    try {
      await onClick();
    } catch (error) {
      console.error('Error handling button click:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleButtonClick} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Send POST Request'}
    </button>
  );
};

export default Button;
