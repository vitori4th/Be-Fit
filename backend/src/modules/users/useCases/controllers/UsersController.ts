import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import { instanceToInstance } from 'class-transformer';
import UserRepository from '../../repositories/user/UserRepository';
import ListUserService from '../services/ListUserService';
import { BcryptHashProvider } from '@modules/users/providers/implementation/BcryptHashProvider';
import ListAllUserService from '../services/ListAllUsersService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      cellphone,
      cpf,
      email,
      dateBirth,
      lastname,
      name,
      password,
      role,
      confirmPassword,
    } = request.body;
    const userRepository = new UserRepository();
    const hashProvider = new BcryptHashProvider()
    const createUser = new CreateUserService(userRepository, hashProvider);
    const user = await createUser.execute({
      cellphone,
      cpf,
      email,
      dateBirth,
      lastname,
      name,
      password,
      role,
      confirmPassword,
    });
    return response.json(instanceToInstance(user));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const usersRepository = new UserRepository();
    const showUser = new ListUserService(usersRepository);
    const user = await showUser.execute({ id });
    return response.json(instanceToInstance(user));
  }

  public async index(_request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const listAllUserService = new ListAllUserService(userRepository)
    const users = await listAllUserService.execute();
    return response.json(instanceToInstance(users));
  }
}
