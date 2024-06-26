import { IUserDTO, User } from '../../entities/user';

export interface IUserRepository {
  register(user: IUserDTO): Promise<User | undefined>;

  update(user: IUserDTO): Promise<User | undefined>;

  updatePassword(user: IUserDTO): Promise<User | undefined>;

  findByEmail(email: string): Promise<User | undefined>;

  findById(id: string): Promise<User | undefined>;

  findByCPF(cpf: string): Promise<User | undefined>;

  findAllUsers(): Promise<User[] | undefined>;
}
