import 'reflect-metadata';
import FakeUserRepository from '@modules/users/repositories/user/fakes/FakeUserRepository';
import CreateUserService from '../CreateUserService';
import AppError from '@shared/errors/AppError';
import request from 'supertest';


let userRepository: FakeUserRepository;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    userRepository = new FakeUserRepository();
    createUser = new CreateUserService(userRepository);
  })
    it('POST', async () => {
      const userData = {
        cellphone: '5588899',
        cpf: 1234,
        email: 'teste@email.com',
        dateBirth: new Date('2002-12-03'),
        lastname: 'teste',
        name: 'ze',
        password: 'teste',
        role: 'USER',
        confirmPassword: 'teste',
      };

      const response = await request('http://localhost:3333')
        .post('/users/')
        .send(userData);

      console.log(response)

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

  it('should not be able to create two customers with the same email', async () => {

    await createUser.execute({
      cellphone: '122334',
      cpf: 122344,
      email: 'andre@email.com',
      dateBirth: new Date('2002-12-03'),
      lastname: 'gomides',
      name: 'andre',
      password: '12345',
      role: 'ADMIN',
      confirmPassword: '12345',
    });

    expect(
      createUser.execute({
        cellphone: '122334',
        cpf: 122344,
        email: 'andre@email.com',
        dateBirth: new Date('2002-12-03'),
        lastname: 'gomides',
        name: 'andre',
        password: '12345',
        role: 'ADMIN',
        confirmPassword: '12345',
      }),
    ).rejects.toBeInstanceOf(AppError);
  })
});

