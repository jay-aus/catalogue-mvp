import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

const getTopRatedProducts = (products) => {
    const featuredProductIds = process.env.FEATURED_IDS.split(',').map(id => parseInt(id));
    const featureddProducts = products
    .filter(product => featuredProductIds.includes(product.id))
    .map(product => ({
      id: product.id,  
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category
    }));
  return featureddProducts;
  };
  
export { getTopRatedProducts };
  