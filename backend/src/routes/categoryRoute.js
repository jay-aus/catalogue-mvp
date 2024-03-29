import express from 'express';
import getCategoryData from '../apiService/categoryService.js';

const router = express.Router();

router.get('/', getCategoryData, (req, res) => {
  const categories = req.categories;
  res.json(categories);
});

export default router;
