import fetchData from './fetchData.mjs';
const BASE_URL = 'https://fakestoreapi.com/products';

const getAllProducts = async (req, res, next) => {
  try {
    const data = await fetchData(`${BASE_URL}`);
    return data;
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProductData = async (req, res, next) => {
  try {
    const data = await fetchData(`${BASE_URL}`);
    /* TO DO create a method in API (Business logic) for filtering 5 products based on the ID; predecided*/
    // getTopRatedProduces();
    req.products = data.slice(0, 5);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getCategoryProductData = async (req, res, next) => {
  const { categoryName } = req.params;

  try {
    const data = await fetchData(`${BASE_URL}/category/${categoryName}`);
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
    const product = await fetchData(`${BASE_URL}/${productId}`);
    req.product = product;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getProductData, getCategoryProductData, getAllProducts, getProductItemDetails };
