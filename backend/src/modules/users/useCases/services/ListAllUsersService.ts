import { IUserRepository } from '@modules/users/repositories/user/IUserRepository';
import AppError from '../../../../shared/errors/AppError';
import { User } from '../../entities/user';

export default class ListAllUserService {
  constructor(
    private repository: IUserRepository,
  ) {}
  public async execute(): Promise<User[]> {

    const users = await this.repository.findAllUsers();

    if (!users) {
      throw new AppError('Users not found');
    }

    return users;
  }
}
