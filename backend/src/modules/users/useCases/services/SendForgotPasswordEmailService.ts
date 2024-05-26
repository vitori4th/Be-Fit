import AppError from '@shared/errors/AppError';
import path from 'path';
import EtherealMail from '@config/mail/EtherealMail';
import { IUserRepository } from '@modules/users/repositories/user/IUserRepository';
import { IUserTokenRepository } from '@modules/users/repositories/userToken/IUserTokenRepository';

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {

  constructor(
    private userRepository: IUserRepository,
    private userTokenRepository: IUserTokenRepository,
  ) {}
  public async execute({ email }: IRequest): Promise<void> {

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists.');
    }

    const { token } = await this.userTokenRepository.generate(user.id);


    const forgotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      '..',
      'views',
      'forgot_password.hbs',
    );

    await EtherealMail.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: '[BeFit] Recuperação de senha',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `${process.env.APP_WEB_URL}${token}`,
        },
      },
    });
  }
}

export default SendForgotPasswordEmailService;
