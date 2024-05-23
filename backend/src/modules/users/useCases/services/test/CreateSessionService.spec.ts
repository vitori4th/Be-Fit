import FakeUserRepository from '@modules/users/repositories/user/fakes/FakeUserRepository';
import 'reflect-metadata';
import CreateSessionsService from '../CreateSessionService';
import FakeHashProvider from '@modules/users/providers/fakes/FakeHashProvider';
import AppError from '@shared/errors/AppError';


let fakeUsersRepository: FakeUserRepository;
let createSession: CreateSessionsService;
let fakeHashProvider: FakeHashProvider;

describe('CreateSession', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();
    createSession = new CreateSessionsService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authenticate', async () => {
    const user = await fakeUsersRepository.register({
      cellphone: '5588899',
      cpf: 1234,
      email: 'teste@email.com',
      dateBirth: new Date('2002-12-03'),
      lastname: 'teste',
      name: 'ze',
      password: 'teste',
      role: 'USER',
    });

    const response = await createSession.execute({
      email: 'teste@teste.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existent user', async () => {
    expect(
      createSession.execute({
        email: 'teste@teste.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    await fakeUsersRepository.register({
      cellphone: '5588899',
      cpf: 1234,
      email: 'teste@email.com',
      dateBirth: new Date('2002-12-03'),
      lastname: 'teste',
      name: 'ze',
      password: 'teste',
      role: 'USER',
    });

    expect(
      createSession.execute({
        email: 'teste@teste.com',
        password: '567890',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
