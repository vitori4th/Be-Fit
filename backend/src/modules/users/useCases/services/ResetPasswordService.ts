import AppError from '@shared/errors/AppError';
import { isAfter, addHours } from 'date-fns';
import { hash } from 'bcryptjs';
import UserRepository from '@modules/users/repositories/user/UserRepository';
import UserTokensRepository from '@modules/users/repositories/userToken/UserTokenRepository';
import { IUserRepository } from '@modules/users/repositories/user/IUserRepository';

interface IRequest {
  token: string;
  password: string;
}

class ResetPasswordService {

  constructor(private repository: IUserRepository) {}
  public async execute({ token, password }: IRequest): Promise<void> {
    const userRepository = new UserRepository();
    const userTokenRepository = new UserTokensRepository();

    const userToken = await userTokenRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User Token does not exists.');
    }

    const user = await userRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User does not exists.');
    }

    const tokenCreatedAt = user.createdAt;
    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired.');
    }

    user.password = await hash(password, 8);

    await this.repository.updatePassword(user);
  }
}

export default ResetPasswordService;
