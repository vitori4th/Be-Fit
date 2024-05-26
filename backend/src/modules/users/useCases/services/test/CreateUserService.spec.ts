import 'reflect-metadata';
import FakeUserRepository from '@modules/users/repositories/user/fakes/FakeUserRepository';
import CreateUserService from '../CreateUserService';
import AppError from '@shared/errors/AppError';
import FakeHashProvider from '@modules/users/providers/fakes/FakeHashProvider';


let userRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    userRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();
    createUser = new CreateUserService(userRepository, fakeHashProvider);
  })
    it('POST', async () => {
      const user = await createUser.execute({
        cellphone: '5588899',
        cpf: '11233665899',
        email: 'teste@email.com',
        dateBirth: new Date('2002-12-03'),
        lastname: 'teste',
        name: 'ze',
        password: 'teste',
        role: 'USER',
        confirmPassword: 'teste',
      });


      expect(user).toEqual(
        expect.objectContaining({
          cellphone: expect.any(String),
          cpf: expect.any(String),
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
      cellphone: '5588899',
      cpf: '12345614785',
      email: 'andre@email.com',
      dateBirth: new Date('2002-12-03'),
      lastname: 'teste',
      name: 'ze',
      password: 'teste',
      role: 'USER',
      confirmPassword: 'teste',
    });

    expect(
      createUser.execute({
        cellphone: '122334',
        cpf: '122344222222',
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

