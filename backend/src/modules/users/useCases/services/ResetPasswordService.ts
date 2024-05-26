import AppError from '@shared/errors/AppError';
import { isAfter, addHours } from 'date-fns';
import { hash } from 'bcryptjs';
import { IUserRepository } from '@modules/users/repositories/user/IUserRepository';
import { IUserTokenRepository } from '@modules/users/repositories/userToken/IUserTokenRepository';

interface IRequest {
  token: string;
  password: string;
}

class ResetPasswordService {
  constructor(
    private userRepository: IUserRepository,
    private userTokenRepository: IUserTokenRepository,
  ) {}
  public async execute({ token, password }: IRequest): Promise<void> {

    const userToken = await this.userTokenRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User Token does not exists.');
    }

    const user = await this.userRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User does not exists.');
    }

    const tokenCreatedAt = user.createdAt;
    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired.');
    }

    user.password = await hash(password, 8);

    await this.userRepository.updatePassword(user);
  }
}

export default ResetPasswordService;
