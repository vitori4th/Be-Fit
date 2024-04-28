import AppError from '../../../../shared/errors/AppError';
import { User } from '../../entities/user';
import UserRepository from '../../repositories/user/UserRepository';

interface IRequest {
  id: string;
}

export default class ListUserService {
  public async execute({ id }: IRequest): Promise<User> {
    const usersRepository = new UserRepository();

    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}
