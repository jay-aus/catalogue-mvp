import request from 'supertest';
import express from 'express';
import { getAllProducts } from '../middleware/productMiddleware';
import { getTopRatedProducts } from  '../api/products/products';

jest.mock('../middleware/productMiddleware');

const app = express();

app.get('/products', async (req, res) => {
  try {
    const data = await getAllProducts(req, res);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

describe('Product Route', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get products', async () => {
    // Mocked data
    const mockProducts = [
      { 
        id: 1, 
        title: 'Product 1 Title',
        description: 'Product 1 Description',
        price: 10.99,
        category: 'Electronics'
      },
      { 
        id: 2, 
        title: 'Product 2 Title',
        description: 'Product 2 Description',
        price: 10.00,
        category: 'Electronics'
      }
    ];

    // Mock the implementation of getAllProducts
    getAllProducts.mockResolvedValue(mockProducts);

    const response = await request(app).get('/products');
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockProducts);
  });

  it('should handle error', async () => {
    // Mocked error
    const mockError = new Error('Mocked error');

    // Mock the implementation of getAllProducts to throw an error
    getAllProducts.mockRejectedValue(mockError);

    const response = await request(app).get('/products');
    
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Internal Server Error' });
  });

  it('should return top rated products on the home page', async () => {
    // Mocked product data
    const mockedProducts = [
      { 
        id: 1, 
        title: 'Product 1 Title',
        description: 'Product 1 Description',
        price: 10.99,
        category: 'Electronics'
      },
      { 
        id: 2, 
        title: 'Product 1 Title',
        description: 'Product 1 Description',
        price: 10.99,
        category: 'Electronics'
      },
      { 
        id: 3, 
        title: 'Product 1 Title',
        description: 'Product 1 Description',
        price: 10.99,
        category: 'Electronics'
      },
      { 
        id: 4, 
        title: 'Product 1 Title',
        description: 'Product 1 Description',
        price: 10.99,
        category: 'Electronics'
      },
      { 
        id: 5, 
        title: 'Product 1 Title',
        description: 'Product 1 Description',
        price: 10.99,
        category: 'Electronics'
      },
      { 
        id: 6, 
        title: 'Product 6 Title',
        description: 'Product 6 Description',
        price: 10.99,
        category: 'Electronics'
      },
    ];

    const expectedResultProducts = [
      { 
        id: 1, 
        title: 'Product 1 Title',
        description: 'Product 1 Description',
        price: 10.99,
        category: 'Electronics'
      },
      { 
        id: 2, 
        title: 'Product 1 Title',
        description: 'Product 1 Description',
        price: 10.99,
        category: 'Electronics'
      },
      { 
        id: 3, 
        title: 'Product 1 Title',
        description: 'Product 1 Description',
        price: 10.99,
        category: 'Electronics'
      },
      { 
        id: 4, 
        title: 'Product 1 Title',
        description: 'Product 1 Description',
        price: 10.99,
        category: 'Electronics'
      },
      { 
        id: 5, 
        title: 'Product 1 Title',
        description: 'Product 1 Description',
        price: 10.99,
        category: 'Electronics'
      }
    ];

    // Set up the mock for getAllProducts
    getAllProducts.mockResolvedValue(mockedProducts);

    // Mock FEATURED_IDS environment variable
    process.env.FEATURED_IDS = '1,2,3,4,5';

    // Call the actual getTopRatedProducts function
    const topRatedProducts = getTopRatedProducts(mockedProducts);
    expect(expectedResultProducts).toEqual(topRatedProducts);
  });
});
