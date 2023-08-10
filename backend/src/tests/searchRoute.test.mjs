import request from 'supertest';
import app from '../server.mjs';

describe('Search Route', () => {
  it('should get search results', async () => {
    const searchTerm = 'shirt'; // Replace with a valid search term
    const response = await request(app).get(`/search?term=${searchTerm}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
