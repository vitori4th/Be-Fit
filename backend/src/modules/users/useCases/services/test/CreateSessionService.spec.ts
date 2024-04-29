import request from 'supertest';
import 'reflect-metadata';


describe('POST /sessions', () => {
  it('should return a user and token when credentials are correct', async () => {
    // Dados de algum usuario existente
    const email = 'teste@email.com';
    const password = 'teste';

    const response = await request('http://localhost:3333')
      .post('/login/')
      .send({ email, password });

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty('token');
  });
});
