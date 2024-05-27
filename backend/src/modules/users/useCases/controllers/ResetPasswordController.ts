import { Request, Response } from 'express';
import ResetPasswordService from '../services/ResetPasswordService';
import UserRepository from '@modules/users/repositories/user/UserRepository';
import UserTokensRepository from '@modules/users/repositories/userToken/UserTokenRepository';

export default class ResetPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { password, token } = req.body;

    const userRepository = new UserRepository();
    const userTokenRepository = new UserTokensRepository();

    const resetPassword = new ResetPasswordService(userRepository, userTokenRepository);

   await resetPassword.execute({
      password,
      token
    });

    return res.status(204).json();
  }
}
