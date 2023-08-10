import express from 'express';
import { getProductData,getCategoryProductData,getProductItemDetails }  from '../middleware/productMiddleware.mjs';

const router = express.Router();

router.get('/', getProductData, (req, res) => {
  const products = req.products;
  res.json(products);
});

router.get('/products', getProductData, (req, res) => {
  const products = req.products;
  res.json(products);
});

//TO DO put this under category - seems more logical there?
router.get('/category/:categoryName', getCategoryProductData, (req, res) => {
  const products = req.products;
  res.json(products);
});

// Route to get product details by ID
router.get('/:productId', getProductItemDetails, (req, res) => {
  const product = req.product;
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

export default router;
