import { sign } from 'jsonwebtoken';
import { User } from '../../entities/user';
import UserRepository from '../../repositories/UserRepository';
import AppError from '../../../../shared/errors/AppError';
import { compare } from 'bcrypt';
import authConfig from '../../../../config/auth';

interface IRequest {
  email: string;
  password: string;
}

interface Iresponse {
  user: User;
  token: string;
}

class CreateSessionsService {
  public async execute({ email, password }: IRequest): Promise<Iresponse> {
    const userRepository = new UserRepository();
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Icorrect email/password combination.', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Icorrect email/password combination.', 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default CreateSessionsService;
