import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import { instanceToInstance } from 'class-transformer';

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
}
