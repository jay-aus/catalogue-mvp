import express from 'express';
import enquiryMiddleware from '../middleware/enquiryMiddleware.mjs';

const router = express.Router();

router.post('/', enquiryMiddleware, (req, res) => {
  // Handle enquiry logic and send response
});

export default router;
