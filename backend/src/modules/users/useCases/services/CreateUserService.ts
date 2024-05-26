import { UserRoleType } from '@prisma/client';
import { User } from '../../entities/user';
import AppError from '../../../../shared/errors/AppError';
import { excludeFromObject } from '../../../../shared/utils/excludePasswordUser';
import { IUserRepository } from '@modules/users/repositories/user/IUserRepository';
import { IHashprovider } from '@modules/users/providers/models/IHashProvider';

interface IUserConfig {
  cellphone: string;
  cpf: string;
  email: string;
  dateBirth: Date;
  lastname: string;
  name: string;
  password: string;
  role: UserRoleType;
  confirmPassword: string;
}

export default class CreateUserService {

  constructor(
    private repository: IUserRepository,
    private hashProvider: IHashprovider
  ) { }

  public async execute({
    cellphone,
    cpf,
    email,
    dateBirth,
    lastname,
    name,
    password,
    role,
    confirmPassword,
  }: IUserConfig): Promise<User> {
    const emailExists = await this.repository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email addres already used.');
    }

    const cpfExists = await this.repository.findByCPF(cpf);

    if (cpfExists) {
      throw new AppError('CPF already used.');
    }

    if (password !== confirmPassword) {
      throw new AppError('Passwords do not match.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password)

    const user = {
      cellphone,
      cpf,
      email,
      dateBirth,
      lastname,
      name,
      password: hashedPassword,
      role,
    };

    const userCreated = await this.repository.register(user);

    const userWithoutPassword = excludeFromObject(userCreated, ['password']);

    return userWithoutPassword as User;
  }
}
