import express from 'express';
import productRoute from './routes/productRoute.js'; // Update the paths as needed
import categoryRoute from './routes/categoryRoute.js';
import enquiryRoute from './routes/enquiryRoute.js';
import searchRoute from './routes/searchRoute.js';
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/search', searchRoute);
app.use('/products', productRoute);
app.use('/categories', categoryRoute);
app.use('/enquiry', enquiryRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
