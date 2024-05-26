import 'reflect-metadata';
import FakeUserRepository from '@modules/users/repositories/user/fakes/FakeUserRepository';
import CreateUserService from '../CreateUserService';
import { BcryptHashProvider } from '@modules/users/providers/implementation/BcryptHashProvider';
import FakeHashProvider from '@modules/users/providers/fakes/FakeHashProvider';
import ListUserService from '../ListUserService';
import AppError from '@shared/errors/AppError';


let userRepository: FakeUserRepository;
let createUser: CreateUserService;
let fakeHashProvider: BcryptHashProvider;
let listUserService: ListUserService;

describe('GetUser', () => {
  beforeEach(() => {
    userRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();
    listUserService = new ListUserService(userRepository);
    createUser = new CreateUserService(userRepository, fakeHashProvider);
  });
  it('should be able to list a user by id', async () => {
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
    const result = await listUserService.execute({ id: user.id });
    delete result.password;
    expect(result).toEqual(user);
  });

  it('should throw an error if user is not found', async () => {
    await expect(listUserService.execute({ id: '123' })).rejects.toBeInstanceOf(
      AppError,
    );
  });

});
