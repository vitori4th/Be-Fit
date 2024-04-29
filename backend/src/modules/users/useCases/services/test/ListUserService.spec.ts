import 'reflect-metadata';
import FakeUserRepository from '@modules/users/repositories/user/fakes/FakeUserRepository';
import CreateUserService from '../CreateUserService';
import request from 'supertest';
import AppError from '@shared/errors/AppError';

let userRepository: FakeUserRepository;
let _createUser: CreateUserService;

describe('GetUser', () => {
  beforeEach(() => {
    userRepository = new FakeUserRepository();
    _createUser = new CreateUserService(userRepository);
  });
  it('GET', async () => {
    const userData = {
      id: 'b4225ebe-0ab5-4a48-9615-0ba6d750d5a2',
      email: 'andree@email.com',
      cpf: 1478785,
      name: 'andre',
      lastname: 'gomides',
      dateBirth: '2022-01-01T00:00:00.000Z',
      cellphone: '37999791290',
      role: 'ADMIN',
      createdAt: '2024-04-29T02:26:10.998Z',
      updatedAt: '2024-04-29T02:26:10.998Z',
    };

    const response = await request('http://localhost:3333')
      .get(`/users/${userData.id}`)

    expect(response.status).toBe(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        cellphone: expect.any(String),
        cpf: expect.any(Number),
        createdAt: expect.any(String),
        dateBirth: expect.any(String),
        email: expect.any(String),
        id: expect.any(String),
        lastname: expect.any(String),
        name: expect.any(String),
        role: expect.any(String),
        updatedAt: expect.any(String),
      }),
    );
  });

  it('GET if id not exists, throw error', async () => {
    const userData = {
      id: '3',
      email: 'andree@email.com',
      cpf: 1478785,
      name: 'andre',
      lastname: 'gomides',
      dateBirth: '2022-01-01T00:00:00.000Z',
      cellphone: '37999791290',
      role: 'ADMIN',
      createdAt: '2024-04-29T02:26:10.998Z',
      updatedAt: '2024-04-29T02:26:10.998Z',
    };

    const response = await request('http://localhost:3333').get(
      `/users/${userData.id}`,
    );

    expect(response.status).toBe(400);
    expect(response).rejects.toBeInstanceOf(AppError);

  });
});
