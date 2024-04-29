import request from 'supertest';

describe('POST /sessions', () => {
  it('deve retornar um usuário e um token quando as credenciais estiverem corretas', async () => {
    // Dados de algum usuario existente
    const email = 'teste@email.com';
    const password = '12345';
    const userInDb = {
      id: '53a9efcc-c14f-49c7-9682-f4facd5437c9',
      email: 'teste@email.com',
      cpf: 1114587,
      name: 'andre',
      lastname: 'gomides',
      dateBirth: '2022-01-01T00:00:00.000Z',
      cellphone: '37999791290',
      role: 'ADMIN',
      createdAt: '2024-04-29T03:06:55.727Z',
      updatedAt: '2024-04-29T03:06:55.727Z',
    };

    const response = await request('http://localhost:3333')
      .post('/login/')
      .send({ email, password });

    expect(response.status).toBe(200);

    expect(response.body).toContain(userInDb)

    expect(response.body).toHaveProperty('token');
  });
});
