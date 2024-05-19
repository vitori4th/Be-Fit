import { IUserDTO, User } from '@modules/users/entities/user';
import { IUserRepository } from '../IUserRepository';
import AppError from '@shared/errors/AppError';

export default class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  public async register({
    cellphone,
    cpf,
    email,
    dateBirth,
    lastname,
    name,
    password,
    role,
  }: IUserDTO): Promise<User> {
    const newUser = new User();

    newUser.cellphone = cellphone;
    newUser.cpf = cpf;
    newUser.email = email;
    newUser.dateBirth = dateBirth;
    newUser.lastname = lastname;
    newUser.name = name;
    newUser.password = password;
    newUser.role = role;

    this.users.push(newUser);

    return newUser;
  }

  public async update({
    id,
    cellphone,
    dateBirth,
    lastname,
    name,
  }: IUserDTO): Promise<User> {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) {
      throw new AppError('User not found');
    }

    this.users[index].cellphone = cellphone;
    this.users[index].dateBirth = dateBirth;
    this.users[index].lastname = lastname;
    this.users[index].name = name;

    return this.users[index];
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  public async findById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  public async findByCPF(cpf: number): Promise<User | undefined> {
    return this.users.find(user => user.cpf === cpf);
  }

  public async findAllUsers(): Promise<User[]> {
    return this.users;
  }

  public async updatePassword({
    id,
    password
  }: IUserDTO): Promise<User> {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) {
      throw new AppError('User not found');
    }

    this.users[index].password = password;

    return this.users[index];
  }
}
