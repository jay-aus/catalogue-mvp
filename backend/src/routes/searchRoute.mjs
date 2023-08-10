import express from 'express';
import searchProducts from '../middleware/searchMiddleware.mjs';

const router = express.Router();

// Route to handle search
router.get('/', async (req, res) => {
  const searchTerm = req.query.term;
  try {
    const searchResults = await searchProducts(searchTerm);
    res.json(searchResults);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
