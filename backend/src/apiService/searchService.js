import { getAllProducts } from './productService.js';

const searchProducts = async (searchTerm) => {
  try {
    const allProducts = await getAllProducts();
    const searchResults = allProducts.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return searchResults;
  } catch (error) {
    throw new Error('Error searching products:', error);
  }
};

export default  searchProducts;
