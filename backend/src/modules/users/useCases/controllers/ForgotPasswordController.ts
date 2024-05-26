import { Request, Response } from 'express';
import SendForgotPasswordEmailService from '../services/SendForgotPasswordEmailService';
import UserTokensRepository from '@modules/users/repositories/userToken/UserTokenRepository';
import UserRepository from '@modules/users/repositories/user/UserRepository';

export default class ForgotPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    const userRepository = new UserRepository();
    const userTokenRepository = new UserTokensRepository();

    const senForgotPasswordEmail = new SendForgotPasswordEmailService(userRepository, userTokenRepository);

    await senForgotPasswordEmail.execute({
      email,
    });

    return res.status(204).json();
  }
}
