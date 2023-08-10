import fetchData from './fetchData.mjs';
const BASE_URL = process.env.BASE_URL;
import { getTopRatedProducts } from '../api/products/products.mjs';

const getAllProducts = async (req, res, next) => {
  try {
    const data = await fetchData(`${BASE_URL}/products`);
    return data;
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProductData = async (req, res, next) => {
  try {
    const data = await getAllProducts();
    req.products = getTopRatedProducts(data);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getCategoryProductData = async (req, res, next) => {
  const { categoryName } = req.params;

  try {
    const data = await fetchData(`${BASE_URL}/products/category/${categoryName}`);
    // TO DO - move this as a function in the api business logic?
    req.products = data.sort((a, b) => b.rating.rate - a.rating.rate); // Sort by rating in descending order
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProductItemDetails = async (req, res, next) => {
  const { productId } = req.params;

  try {
    const product = await fetchData(`${BASE_URL}/products/${productId}`);
    req.product = product;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getProductData, getCategoryProductData, getAllProducts, getProductItemDetails };
