import { IUserDTO, User } from '../entities/user';

export interface IUserRepository {
  register(user: IUserDTO): Promise<User>;

  findByEmail(email: string): Promise<User>;

  findById(id: string): Promise<User>;
}
