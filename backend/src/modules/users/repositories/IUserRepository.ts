import { IUserDTO } from '../entities/user';

export interface IUserRepository {
  register(user: IUserDTO): Promise<void>;
}
