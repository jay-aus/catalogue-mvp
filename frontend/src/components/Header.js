import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'; // Import the Search component
import './Header.css';

const Header = ({ onSearch }) => { // Add onSearch as a prop
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/categories');
        const data = await response.json();
        setCategories(['Home', ...data]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <header className="header">
      <div className="site-name">Catalogue Site</div>
      <div className="categories-line">
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={category === 'Home' ? '/' : `/category/${category}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-right">
        <Search onSearch={onSearch} /> {/* Pass the onSearch prop */}
        <div className="profile-icon">
          <button>
            <img src="/images/profile-icon.png" alt="Profile" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
