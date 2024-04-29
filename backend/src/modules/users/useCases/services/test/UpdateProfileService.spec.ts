import request from 'supertest';
import CreateUserService from '../CreateUserService';
import UserRepository from '../../../repositories/user/UserRepository';
import { IUserDTO } from '../../../entities/user';
import CreateSessionsService from '../CreateSessionService';

let userRepository: UserRepository;
let _createUser: CreateUserService;

describe('User API', () => {

  beforeEach(() => {
        userRepository = new UserRepository();
        _createUser = new CreateUserService(userRepository);
      })

  it('should update user information', async () => {

    const sessionService = new CreateSessionsService();
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
