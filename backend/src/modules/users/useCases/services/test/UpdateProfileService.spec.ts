import request from 'supertest';
import CreateUserService from '../CreateUserService';
import UserRepository from '../../../repositories/user/UserRepository';
import { IUserDTO } from '../../../entities/user';
import CreateSessionsService from '../CreateSessionService';
import { BcryptHashProvider } from '@modules/users/providers/implementation/BcryptHashProvider';

let userRepository: UserRepository;
let hashedProvider: BcryptHashProvider;
let _createUser: CreateUserService;

describe('User API', () => {

  beforeEach(() => {
    userRepository = new UserRepository();
    hashedProvider = new BcryptHashProvider();
        _createUser = new CreateUserService(userRepository, hashedProvider);
      })

  it('should update user information', async () => {

    const sessionService = new CreateSessionsService(userRepository, hashedProvider);
    const { token } = await sessionService.execute({
      email: 'teste@email.com',
      password: 'teste',
    });

    const updatedUserDetails: Partial<IUserDTO> = {
      cellphone: '88888',
      lastname: 'testou',
    };

    const response = await request('http://localhost:3333')
      .put(`/profile`)
      .send(updatedUserDetails)
      .set('Authorization', `bearer ${token}`);

    expect(response.status).toBe(200);

    expect(response.body.cellphone).toEqual(updatedUserDetails.cellphone);
    expect(response.body.lastname).toEqual(updatedUserDetails.lastname);
  });

  });
