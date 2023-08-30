import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductsByCategory from './components/ProductsByCategory';
import Header from './components/Header';
import ProductsBySearch from './components/ProductsBySearch';
import ProductDetails from './components/ProductDetails'; // Import the ProductDetails component

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<ProductsByCategory />} />
          <Route path="/search" element={<ProductsBySearch searchString={searchQuery} />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
