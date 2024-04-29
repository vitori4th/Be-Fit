import { IUserRepository } from '@modules/users/repositories/user/IUserRepository';
import AppError from '../../../../shared/errors/AppError';
import { User } from '../../entities/user';

interface IRequest {
  id: string;
}

export default class ListUserService {
  constructor(private repository: IUserRepository) {}

  public async execute({ id }: IRequest): Promise<User> {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}
