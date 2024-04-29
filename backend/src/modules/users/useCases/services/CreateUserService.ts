import { UserRoleType } from '@prisma/client';
import { User } from '../../entities/user';
import AppError from '../../../../shared/errors/AppError';
import { excludeFromObject } from '../../../../shared/utils/excludePasswordUser';
import { hash } from 'bcrypt';
import { IUserRepository } from '@modules/users/repositories/user/IUserRepository';

interface IUserConfig {
  cellphone: string;
  cpf: number;
  email: string;
  dateBirth: Date;
  lastname: string;
  name: string;
  password: string;
  role: UserRoleType;
  confirmPassword: string;
}

export default class CreateUserService {

  constructor(private repository: IUserRepository) { }

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
    //const userRepository = new UserRepository();
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

    const hashedPassword = await hash(password, 8);

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
