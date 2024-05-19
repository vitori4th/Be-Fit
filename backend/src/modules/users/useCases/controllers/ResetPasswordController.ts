import { Request, Response } from 'express';
import ResetPasswordService from '../services/ResetPasswordService';
import UserRepository from '@modules/users/repositories/user/UserRepository';

export default class ResetPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { password, token } = req.body;

    const usersRepository = new UserRepository();

    const resetPassword = new ResetPasswordService(usersRepository);

   await resetPassword.execute({
      password,
      token
    });

    return res.status(204).json();
  }
}
