import 'reflect-metadata';
import FakeUserRepository from '@modules/users/repositories/user/fakes/FakeUserRepository';
import CreateUserService from '../CreateUserService';
import request from 'supertest';
import CreateSessionsService from '../CreateSessionService';


let userRepository: FakeUserRepository;
let _createUser: CreateUserService;

describe('GetUser', () => {
  beforeEach(() => {
    userRepository = new FakeUserRepository();
    _createUser = new CreateUserService(userRepository);
  });
  it('GET', async () => {
    const id = 'b4225ebe-0ab5-4a48-9615-0ba6d750d5a2';
    const email = 'teste@email.com';
    const password = '12345';


    const sessionService = new CreateSessionsService();
    const { token } = await sessionService.execute({
      email,
      password,
    })

    const response = await request('http://localhost:3333')
      .get(`/users/${id}`)
      .set('Authorization', `bearer ${token}`);

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
    const id = 'b4225ebe-0ab5-4a48-9615-0ba6d750d5a1';

    const response = await request('http://localhost:3333').get(`/users/${id}`);

    expect(response.status).toBe(400);
    expect(response.body.message).toEqual('JWT Token is missing.');
  });
});
