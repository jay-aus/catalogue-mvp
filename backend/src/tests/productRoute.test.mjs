// tests/productRoute.test.mjs
import request from 'supertest';
import app from '../server.mjs';

describe('Product Route', () => {
  it('should get products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
