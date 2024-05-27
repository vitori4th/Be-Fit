import { Request, Response } from 'express';
import { instanceToInstance } from 'class-transformer';
import CreateSessionsService from '../services/CreateSessionService';
import { BcryptHashProvider } from '@modules/users/providers/implementation/BcryptHashProvider';
import UserRepository from '@modules/users/repositories/user/UserRepository';

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const hashProvider = new BcryptHashProvider();
    const userRepository = new UserRepository()
    const createSession = new CreateSessionsService(userRepository, hashProvider);

    const user = await createSession.execute({
      email,
      password,
    });

    return res.json(instanceToInstance(user));
  }
}
