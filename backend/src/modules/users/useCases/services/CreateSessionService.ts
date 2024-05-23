import { sign } from 'jsonwebtoken';
import { User } from '../../entities/user';
import AppError from '../../../../shared/errors/AppError';
import authConfig from '../../../../config/auth';
import { IHashprovider } from '@modules/users/providers/models/IHashProvider';
import { IUserRepository } from '@modules/users/repositories/user/IUserRepository';

interface IRequest {
  email: string;
  password: string;
}

interface Iresponse {
  user: User;
  token: string;
}

class CreateSessionsService {
  constructor(
    private repository: IUserRepository,
    private hashProvider: IHashprovider,
  ) {}

  public async execute({ email, password }: IRequest): Promise<Iresponse> {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new AppError('Icorrect email/password combination.', 401);
    }

    const passwordConfirmed = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordConfirmed) {
      throw new AppError('Icorrect email/password combination.', 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: JSON.stringify({
        id: user.id,
        role: user.role,
      }),
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default CreateSessionsService;
