import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import { instanceToInstance } from 'class-transformer';
import UserRepository from '../../repositories/user/UserRepository';

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
    const createUser = new CreateUserService();
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
    const userRepository = new UserRepository();
    const user = await userRepository.findById(id);
    return response.json(instanceToInstance(user));
  }

  public async index(_request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const users = await userRepository.findAllUsers();
    return response.json(instanceToInstance(users));
  }
}
