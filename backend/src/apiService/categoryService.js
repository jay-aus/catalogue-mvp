import fetchData from './fetchData.js';
const BASE_URL = process.env.BASE_URL;

const getCategoryData = async (req, res, next) => {
  try {
    const data = await fetchData(`${BASE_URL}/products/categories`);
    req.categories = data;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default getCategoryData;
