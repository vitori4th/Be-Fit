import AppError from '../../../../shared/errors/AppError';
import { User } from '../../entities/user';
import UserRepository from '../../repositories/user/UserRepository';

export default class ListAllUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = new UserRepository();

    const users = await usersRepository.findAllUsers();

    if (!users) {
      throw new AppError('Users not found');
    }

    return users;
  }
}
